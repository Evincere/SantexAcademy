const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../services/userService');
require('dotenv').config();

async function login(req, res, next) {
  const { username, password } = req.body;

  try {
    const user = await userService.authenticateUser(username, password);
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        userId: user.id,
        userName: user.username,
        rol: user.rol,
      },
      secretKey,
      {
        expiresIn: '1d',
      },
    );

    return res.status(200).json({
      message: `Credenciales válidas, acceso al usuario: ${username}`,
      token,
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  const userDetails = req.body;
  try {
    const user = await userService.registerUser(userDetails);
    return res
      .status(201)
      .json({ message: 'Usuario registrado exitosamente', user });
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res) {
  try {
    const page = parseInt(req.query.page || 1, 10);
    const pageSize = parseInt(req.query.pageSize || 10, 10);
    const offset = (page - 1) * pageSize;
    const showInactiveUsers = req.query.showInactiveUsers === 'true';

    let users;

    if (showInactiveUsers) {
      // Si showInactiveUsers es verdadero, obtén todos los usuarios, incluidos los inactivos
      users = await userService.findNotActiveUsers(offset, pageSize);
    } else {
      // Si showInactiveUsers es falso, obtén solo los usuarios activos
      users = await userService.findAllActiveUsers(offset, pageSize);
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al traer usuarios paginados' });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al traer user por su id' });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updatedUser = await userService.updateUser(id, newData);
    res.status(200).json(updatedUser);
  } catch (error) {
    throw new Error(
      `Error al actualizar el usuario con id ${id}: ${error.message}`,
    );
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(200).json({ message: `Se ha borrado el registro con id ${id}` });
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar borrar el registro con id: ${req.params.id}`,
    });
  }
}

async function restoreUser(req, res, next) {
  const { id } = req.params;

  try {
    const restoredUser = await userService.restoreUser(id);

    if (!restoredUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res
      .status(200)
      .json({ message: 'Usuario restaurado con éxito', user: restoredUser });
  } catch (error) {
    next(error);
  }
}

async function changePassword(req, res) {
  try {
    const { id } = req.params;
    let { currentPassword, newPassword } = req.body;
    currentPassword = String(currentPassword);
    newPassword = String(newPassword);

    // Verifica que la contraseña actual sea correcta
    const user = await userService.findById(id);
    const currentPasswordIsValid = await user.comparePassword(currentPassword);
    if (!currentPasswordIsValid) {
      return res.status(400).json({ message: 'Contraseña actual incorrecta' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.changePassword(hashedPassword);
    return res.status(200).json({ message: 'Contraseña cambiada con éxito' });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

async function getOnlySurveyors(req, res) {
  console.log('tratando de traer solo encuestadores');
  try {
    const users = await userService.findAllActiveSurveyors();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al traer usuarios paginados' });
  }
}

module.exports = {
  login,
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  restoreUser,
  changePassword,
  getOnlySurveyors,
};

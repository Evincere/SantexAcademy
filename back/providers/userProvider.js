const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');
const { User } = require('../models');

async function getUserByUsername(userName) {
  try {
    return await User.findOne({
      where: { userName },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error while querying user by username:', error);
    throw error;
  }
}

function comparePasswords(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

async function createUser(userDetails) {
  const hashedPassword = await bcrypt.hash(userDetails.password, 10);
  return User.create({ ...userDetails, password: hashedPassword });
}

async function findUsersPaginated(offset, pageSize) {
  try {
    const users = await User.findAll({
      offset,
      limit: pageSize,
    });

    return users;
  } catch (error) {
    throw new Error('Error al traer todos los registros');
  }
}

async function findById(id) {
  try {
    const user = await User.findByPk(id);

    if (user) {
      return user;
    }
    throw new Error('Usuario no encontrado');
  } catch (error) {
    throw error(`Error en la consulta de un user con id ${id}:`, error);
  }
}

async function updateUser(id, newData) {
  const { password } = newData;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const passwordBd = user.password;
    if (!bcrypt.compare(password, passwordBd)) {
      newData.password = passwordBd;
    } else {
      newData.password = await bcrypt.hash(password, 10);
    }

    await user.update(newData, { fields: Object.keys(newData) });
    return user;
  } catch (error) {
    throw new Error(
      `Error al actualizar el usuario con id ${id}: ${error.message}`,
    );
  }
}

async function deleteUser(id) {
  const user = await User.findByPk(id);
  return user.destroy();
}

async function restoreUser(id) {
  try {
    const deletedUser = await User.findByPk(id, { paranoid: false });

    if (!deletedUser) {
      throw new Error('Usuario no encontrado');
    }

    if (deletedUser.deletedAt === null) {
      throw new Error('El usuario no está eliminado');
    }

    const restoredUser = await User.restore({ where: { id } });
    return restoredUser;
  } catch (error) {
    throw new Error(
      `Error al restaurar el usuario con id ${id}: ${error.message}`,
    );
  }
}

async function findUsersNotActivePaginated(offset, pageSize) {
  try {
    const users = await User.findAll({
      where: {
        deletedAt: { [Op.not]: null },
      },
      paranoid: false,
      offset,
      limit: pageSize,
    });
    return users;
  } catch (error) {
    throw new Error('Error al traer usuarios no activos paginados');
  }
}

async function findAllActiveSurveyors() {
  try {
    const users = await User.findAll({
      where: Sequelize.where(Sequelize.fn('lower', Sequelize.col('rol')), Sequelize.fn('lower', 'encuestador')),
    });

    return users;
  } catch (error) {
    throw new Error(`Error al traer encuestadores: ${error.message}`);
  }
}

module.exports = {
  getUserByUsername,
  comparePasswords,
  createUser,
  findUsersPaginated,
  findById,
  updateUser,
  deleteUser,
  restoreUser,
  findUsersNotActivePaginated,
  findAllActiveSurveyors,
};

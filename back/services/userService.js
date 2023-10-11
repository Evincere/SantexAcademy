const userProvider = require('../providers/userProvider');

async function authenticateUser(userName, password) {
  const user = await userProvider.getUserByUsername(userName);
  if (!user || !userProvider.comparePasswords(password, user.password)) {
    return null;
  }
  return user;
}

async function registerUser(userDetails) {
  return userProvider.createUser(userDetails);
}

const findAllActiveUsers = async (offset, pageSize) => {
  const users = await userProvider.findUsersPaginated(offset, pageSize);
  return users;
};

const findById = async (id) => {
  const user = await userProvider.findById(id);
  return user;
};

const updateUser = async (id, newData) => {
  const userUpdate = await userProvider.updateUser(id, newData);
  return userUpdate;
};

const deleteUser = async (id) => {
  await userProvider.deleteUser(id);
};

const restoreUser = async (id) => {
  const userRestored = await userProvider.restoreUser(id);
  return userRestored;
};

const findNotActiveUsers = async (offset, pageSize) => {
  const users = await userProvider.findUsersNotActivePaginated(offset, pageSize);
  return users;
};

module.exports = {
  authenticateUser,
  registerUser,
  findAllActiveUsers,
  findById,
  updateUser,
  deleteUser,
  restoreUser,
  findNotActiveUsers,
};

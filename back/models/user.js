const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Survey, {
        foreignKey: 'surveyorId',
      });
    }

    // Método para cambiar la contraseña
    async changePassword(newPassword) {
      this.password = newPassword;
      await this.save();
    }

    async comparePassword(candidatePassword) {
      return bcrypt.compare(candidatePassword, this.password);
    }
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      rol: DataTypes.STRING,
      phone: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: 'User',
    },
  );

  return User;
};

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const surveyors = [];
    const numSurveyors = 20;

    for (let i = 0; i < numSurveyors; i++) {
      surveyors.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Surveyors', surveyors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Surveyors', null, {});
  },
};

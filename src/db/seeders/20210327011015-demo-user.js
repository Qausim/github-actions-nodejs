'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'jd@example.com',
      password: '123456',
    }, {
      firstName: 'Maria',
      lastName: 'Smith',
      email: 'ms@example.com',
      password: '123456',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

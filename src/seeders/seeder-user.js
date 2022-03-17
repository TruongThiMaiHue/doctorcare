'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [{
            password: 'abc',
            firstName: 'abc',
            lastName: 'abc',
            email: 'qoiwrire',
            address: 'qoiwrire',
            gender: 1,
            image: 'qoiwrire',
            phoneNumber: 'qoiwrire',
            roleId: 'qoiwrire',
            positionId: 'qoiwrire',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    async down (queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
    }
};

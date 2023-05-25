'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { column, table } = queryInterface;

    // Check if the column already exists
    const columns = await queryInterface.describeTable('users');

    if (!columns.password_digest) {
      // Create the column if it doesn't exist
      await column('users', 'password_digest', {
        type: Sequelize.STRING,
        allowNull: false
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    const { column, table } = queryInterface;

    // Remove the column if it exists
    await column('users', 'password_digest');
  }
};


  


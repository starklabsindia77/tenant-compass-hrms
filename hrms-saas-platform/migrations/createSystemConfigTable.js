// migrations/createSystemConfigTable.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('system_config', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        config_key: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        config_value: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('now'),
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('system_config');
    },
  };
  
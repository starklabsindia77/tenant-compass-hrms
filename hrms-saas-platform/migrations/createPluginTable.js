 
// migrations/createPluginsTable.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('plugins', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        tenant_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'tenants', // Assuming tenants table exists
            key: 'id',
          },
        },
        plugin_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        plugin_status: {
          type: Sequelize.STRING,
          defaultValue: 'disabled', // Default plugin status
        },
        plugin_settings: {
          type: Sequelize.JSONB, // Store plugin-specific settings in JSON format
          allowNull: true,
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
      await queryInterface.dropTable('plugins');
    },
  };
  
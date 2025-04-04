// migrations/createFeatureTogglesTable.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('feature_toggles', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        tenant_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'tenants',
            key: 'id',
          },
        },
        feature_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        is_enabled: {
          type: Sequelize.BOOLEAN,
          defaultValue: false, // All features are disabled by default
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
      await queryInterface.dropTable('feature_toggles');
    },
  };
  
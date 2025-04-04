// seeders/createFeatureToggles.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Fetch all tenants
      const tenants = await queryInterface.sequelize.query('SELECT id FROM tenants', {
        type: Sequelize.QueryTypes.SELECT,
      });
  
      // Example default features for each tenant
      const defaultFeatures = [
        'employee_management',
        'payroll_management',
        'attendance_management',
        'leave_management',
        'reporting',
      ];
  
      // Create feature toggles for each tenant
      const featureToggles = tenants.map(tenant => 
        defaultFeatures.map(feature => ({
          tenant_id: tenant.id,
          feature_name: feature,
          is_enabled: true,  // Enable features by default
          created_at: new Date(),
          updated_at: new Date(),
        }))
      ).flat();
  
      await queryInterface.bulkInsert('feature_toggles', featureToggles);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('feature_toggles', null, {});
    },
  };
  
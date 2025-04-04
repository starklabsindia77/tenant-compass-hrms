// utils/schemaManager.js

const { Sequelize } = require('sequelize');

// Dynamically set schema for tenant based on tenant schema name (e.g., tenant_abc)
const setTenantSchema = (tenantSchemaName) => {
  const sequelize = new Sequelize(process.env.DB_URI, {
    dialect: 'postgres',
    logging: false,  // Disable logging for production
    define: {
      schema: tenantSchemaName,  // Dynamically set the tenant schema
      underscored: true,
    },
  });

  return sequelize;
};

module.exports = {
  setTenantSchema,
};

// models/public/tenant.js

module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define('Tenant', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schema_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensures the tenant schema name is unique
    },
    subscription_plan_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'SubscriptionPlan', // This model would be in the public schema
        key: 'id',
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'active', // Default status for new tenants
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  return Tenant;
};

// models/public/plugin.js

module.exports = (sequelize, DataTypes) => {
  const Plugin = sequelize.define('Plugin', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    plugin_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plugin_status: {
      type: DataTypes.STRING,
      defaultValue: 'disabled',  // Default plugin status is disabled
    },
    plugin_settings: {
      type: DataTypes.JSONB,  // Store plugin settings as JSON
      allowNull: true,
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

  return Plugin;
};

// models/systemConfig.js

module.exports = (sequelize, DataTypes) => {
    const SystemConfig = sequelize.define('SystemConfig', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      config_key: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      config_value: {
        type: DataTypes.STRING,
        allowNull: false,
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
  
    return SystemConfig;
  };
  
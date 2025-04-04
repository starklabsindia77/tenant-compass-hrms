 
// models/tenant/leave.js

module.exports = (sequelize, DataTypes) => {
    const Leave = sequelize.define('Leave', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      employee_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Employee',
          key: 'id',
        },
      },
      leave_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      leave_start: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      leave_end: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
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
  
    return Leave;
  };
  
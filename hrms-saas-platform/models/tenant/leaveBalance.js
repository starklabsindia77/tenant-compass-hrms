 
// models/tenant/leaveBalance.js

module.exports = (sequelize, DataTypes) => {
    const LeaveBalance = sequelize.define('LeaveBalance', {
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
      total_leave: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
      used_leave: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
      remaining_leave: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
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
  
    return LeaveBalance;
  };
  
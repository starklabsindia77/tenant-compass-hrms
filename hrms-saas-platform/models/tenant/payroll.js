 
// models/tenant/payroll.js

module.exports = (sequelize, DataTypes) => {
    const Payroll = sequelize.define('Payroll', {
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
      salary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      bonuses: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
      deductions: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
      },
      pay_period_start: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pay_period_end: {
        type: DataTypes.DATE,
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
  
    return Payroll;
  };
  
// config/db.js

require('dotenv').config();

const { Sequelize } = require('sequelize');

// Create a Sequelize instance to connect to the PostgreSQL database
const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: 'postgres',
  logging: false, // Disable logging for production. Enable it for debugging in development
  define: {
    underscored: true, // Use snake_case for Sequelize column names
  },
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? { require: true, rejectUnauthorized: false } : false,
  },
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;

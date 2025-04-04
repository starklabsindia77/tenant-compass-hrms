// server.js

require('dotenv').config();  // Optional: if you still want to load environment variables for non-database config
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const { getSystemConfig } = require('./services/systemConfigService'); // New service to get system config

// Importing Routes
const authRoutes = require('./routes/authRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const featureRoutes = require('./routes/featureRoutes');
const pluginRoutes = require('./routes/pluginRoutes');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const payrollRoutes = require('./routes/payrollRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const reportRoutes = require('./routes/reportRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

// Initialize Express App
const app = express();

// Middleware Setup
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse JSON bodies
app.use(morgan('dev'));  // Log HTTP requests to the console

// Database Setup (Sequelize)
const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: 'postgres',
  logging: false, // Disable Sequelize logging, enable in development if needed
});

// Test Database Connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.log('Unable to connect to the database:', err));

// Fetch system configurations from the database
let systemConfig = {};
getSystemConfig()
  .then(config => {
    systemConfig = config; // Store system configurations globally for the app

    // Proceed to start the server after config is loaded
    startServer();
  })
  .catch(err => {
    console.error('Error loading system configurations:', err);
  });

// Function to start the server after loading config
const startServer = () => {
  // Define Routes
  app.use('/api/auth', authRoutes);  // Authentication Routes
  app.use('/api/tenant', tenantRoutes);  // Tenant Management Routes (Super Admin)
  app.use('/api/features', featureRoutes);  // Feature Management Routes
  app.use('/api/plugins', pluginRoutes);  // Plugin Management Routes
  app.use('/api/users', userRoutes);  // Tenant User Routes
  app.use('/api/employees', employeeRoutes);  // Employee Management Routes
  app.use('/api/payroll', payrollRoutes);  // Payroll Management Routes
  app.use('/api/attendance', attendanceRoutes);  // Attendance Management Routes
  app.use('/api/leaves', leaveRoutes);  // Leave Management Routes
  app.use('/api/reports', reportRoutes);  // Report Generation Routes
  app.use('/api/notifications', notificationRoutes);  // Notification Management Routes

  // Serve static files (for production environment)
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
  }

  // Error Handling Middleware (to catch errors globally)
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  });

  // Start the Server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};


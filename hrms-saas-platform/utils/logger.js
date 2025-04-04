 
// utils/logger.js

const winston = require('winston');

// Define the log format
const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level}: ${message}`;
  })
);

// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Default logging level
  transports: [
    new winston.transports.Console({ format: logFormat }),
    new winston.transports.File({ filename: 'logs/app.log', format: logFormat }), // Log to a file
  ],
});

module.exports = logger;

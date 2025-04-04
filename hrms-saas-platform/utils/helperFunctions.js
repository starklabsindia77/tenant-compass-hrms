 
// utils/helperFunctions.js

const moment = require('moment');

// Function to format dates
const formatDate = (date, format = 'YYYY-MM-DD') => {
  return moment(date).format(format);
};

// Function to validate email format
const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

// Function to generate random UUID (for temporary use, useful in seeding data)
const generateUUID = () => {
  return Math.floor(Math.random() * 1000000000).toString(); // simple random number generator for UUID
};

module.exports = {
  formatDate,
  isValidEmail,
  generateUUID,
};

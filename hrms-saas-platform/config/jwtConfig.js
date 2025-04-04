 
// config/jwtConfig.js

require('dotenv').config();

module.exports = {
  secret: process.env.JWT_SECRET || 'your_jwt_secret_key_here',
  expiresIn: process.env.JWT_EXPIRES_IN || '1h',  // Token expiration time (default is 1 hour)
};

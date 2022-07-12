require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 8888,
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_TOKEN_KEY: process.env.JWT_TOKEN_KEY || 'testToken',
  API_SERVICE_URL: process.env.API_SERVICE_URL || 'http://localhost:3000'
}

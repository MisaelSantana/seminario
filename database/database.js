const Sequelize = require('sequelize');
const connection = new Sequelize('ask', 'root', 'suasenha', {
  host: 'localhost',
  dialect: 'mysql',
});
module.exports = connection;
const Sequelize = require('sequelize');
const CatModel = require('./cats')

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, NODE_ENV } = process.env;

const setUpDatabase = () => {
  const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: NODE_ENV === 'production' ? "postgres" : "mysql"
  })

  const Cat = CatModel(connection, Sequelize);

  connection.sync({alter: true});

  return {
    Cat
  };
};

module.exports = setUpDatabase();
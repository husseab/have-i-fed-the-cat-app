const Sequelize = require('sequelize');
const CatModel = require('./cats');

const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT, Node_ENV, DB_PASSWORD } = process.env;

const setUpDatabase = () => {
        const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port:DB_PORT
        dialect: Node_ENV == "production" ? "postgres" : "mysql"
        });
        const Cat = CatModel(connection, Sequelize);
        
        connection.sync({ alter: true });
        return { Cat }
    };
    
module.exports = setUpDatabase();

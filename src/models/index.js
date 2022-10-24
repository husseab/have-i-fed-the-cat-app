const Sequelize = require('sequelize');
const CatModel = require('./cats');

const setUpDatabase = () => {
        const connection = new Sequelize("have-i-fed-the-cat-app", "root", "password", {
        host: "localhost",
        port: 3307,
        dialect: Node_ENV == "production" ? "postgres" : "mysql"
        });
        const Cat = CatModel(connection, Sequelize);
        
        connection.sync({ alter: true });
        return { Cat }
    };
    
module.exports = setUpDatabase();

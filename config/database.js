const Sequelize = require('sequelize');
module.exports = new Sequelize('test','username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
    storage: 'db.sqlite'
});


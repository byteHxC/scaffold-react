const express = require('express');
const app = express();
const sequelize = require('./config/database');


sequelize
    .authenticate()
    .then(() => {
        console.log('connection has been established succesfully')
    })
    .catch(error => {
        console.error('Unable to connect to the database: ', err);
    })


app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('server on port 3000');
});
const express = require('express');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const app = express();
const Sequelize = require('sequelize')

// connexion à la base de donnée

const sequelize = new Sequelize('groupomania', 'root', '1712Sebout!', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Connexion à la BDD");
}).catch(() => {
    console.log("Connexion à la BDD raté");
})

// middlewares

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// routes

app.use('/api/user', userRoutes);

module.exports = app;
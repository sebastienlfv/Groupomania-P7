const express = require('express');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const dotenv = require('dotenv')
const app = express();
const Sequelize = require('sequelize')
const cors = require('cors')

// connexion à la base de donnée
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, '1712Sebout!', {
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

// CORS

app.use(cors())

// middlewares

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// routes

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

module.exports = app;
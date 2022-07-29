const { Sequelize, DataTypes } = require('sequelize');
const { post } = require('../app');
const dotenv = require('dotenv')

dotenv.config()
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

const postSchema = sequelize.define('Post', {
    userId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    message: {
        type: DataTypes.STRING,
        validator: {
            max: 100,
        }
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true
    },
    likes: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    usersLiked : []
  },
  {
    timestamps: false
  }
)

const postModel = sequelize.model('Post', postSchema)
module.exports = postModel;
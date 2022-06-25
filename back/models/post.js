const { Sequelize, DataTypes } = require('sequelize');
const { post } = require('../app');
const sequelize = new Sequelize('groupomania', 'root', '1712Sebout!', {
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
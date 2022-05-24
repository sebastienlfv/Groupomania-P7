const { Sequelize, DataTypes } = require('sequelize');
const { post } = require('../app');
const sequelize = new Sequelize('groupomania', 'root', process.env.MDP_DATABASE, {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

const postSchema = sequelize.define('Post', {
    postId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    message: {
        type: DataTypes.STRING,
        validator: {
            max: 500,
        }
    },
    picture: {
        type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)

const postModel = sequelize.model('Post', postSchema)
module.exports = postModel;
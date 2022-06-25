const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('groupomania', 'root', '1712Sebout!', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

// ASSOSIATION TABLE USER ET POSTS

const userSchema = sequelize.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            min: 3,
            max: 30,
            notEmpty: true
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            min: 3,
            max: 30,
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.NUMBER,
        defaultValue: "0"
    }
  },
  {
    timestamps: false
  },
)

const userModel = sequelize.model('User', userSchema)
module.exports = userModel;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('groupomania', 'root', '1712Sebout!', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validator: {
            min: 3,
            max: 30,
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validator: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
      timestamps: false
  }
)

const userModel = sequelize.model('User', User)
module.exports = userModel;
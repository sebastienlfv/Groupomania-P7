const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = new Sequelize('groupomania', 'root', '1712Sebout!', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

const userSchema = sequelize.define('User', {
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
  },
)

// function bcrypt 
// userSchema.pre('save', async function(next) {
//     const salt = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// }) 

const userModel = sequelize.model('User', userSchema)
module.exports = userModel;
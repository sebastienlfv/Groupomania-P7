const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('groupomania', 'root', '1712Sebout!', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

const roleSchema = sequelize.define('Role', {
    userId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
  },
  {
      timestamps: false
  }
)

const roleModel = sequelize.model('Role', roleSchema)
module.exports = roleModel
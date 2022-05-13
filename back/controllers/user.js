const userModel = require('../models/user')
const ObjectID = require('sequelize').DataTypes.INTEGER

module.exports.getAllUsers = async (req, res) => {
    const users = await userModel.findAll()
    res.status(200).json(users)
}

module.exports.userInfo = (req, res) => {   
    userModel.findOne({ _id: req.params.id })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json(error))
}

module.exports.deleteUser = async (req, res) => {
    userModel.findOne({ _id: req.params.id })
        .then(user => {
            userModel.destroy({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Compte Supprimé !' }))
                .catch(error => res.status(400).json({ message: 'Erreur: Votre compte est pas supprimer' }))
        })
        .catch(error => res.status(500).json({ error }))
}
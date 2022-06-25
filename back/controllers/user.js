const User = require('../models/user')

module.exports.getAllUsers = async (req, res) => {
    User.findAll()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json(error))
}

module.exports.getOneUser = async (req, res) => {
    User.findOne({ where: { id: req.params.id } })
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error))
}

module.exports.deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({ message: "Utilisateur supprimé !" })
    } catch (error) {
        res.status(500).json({ message: 'error' })
    }
}


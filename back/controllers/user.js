const User = require('../models/user')

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
const roleModel = require('../models/role')

module.exports.AllRoles = async(req, res) => {
    roleModel.findAll()
      .then(roles => res.status(200).json(roles))
      .catch(error => res.status(400).json({ error }))
}

module.exports.CreateRole = async(req, res) => {
    const role = new roleModel({
        ...req.body
    })
    role.save()
      .then(() => res.status(201).json({ message: 'Role créé !' }))
      .catch(error => res.status(400).json({ error }))
}

module.exports.DeleteRole = async(req, res) => {
    roleModel.destroy({ where: { id: req.params.id } })
      .then(() => res.status(200).json({ message: 'Role supprimé !' }))
      .catch(error => res.status(400).json({ error }))
}
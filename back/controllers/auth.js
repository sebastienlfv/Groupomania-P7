const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


module.exports.signup = async (req, res) => {
    console.log(req.body);
    const {pseudo, email, password} = req.body

    try {
        const user = await userModel.create({pseudo, email, password})
        res.status(201).json({ user: user.id })
    }
    catch(err) {
        res.status(400).send({ err })
    }
}

module.exports.signin = async(req, res) => {
    userModel.findOne({ email: req.body.email })
      .then(user => {
          if(!user) {
              return res.status(401).json({ error: 'Utilisateur non trouvé !' })
          }
          bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if(!valid) {
                    return res.status(401).json({ error: 'Mot de passe incorrect' })
                }
                res.status(200).json({
                    userId: user._id,
                    token: jwt.sign(
                        { userId: user._id },
                        'TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                })
            })
            .catch(error => res.status(500).json({ error }))
      })
      .catch(error => res.status(500).json({ error }))
}

module.exports.logout = async(req, res) => {

}
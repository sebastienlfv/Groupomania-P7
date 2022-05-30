const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


module.exports.signup = async (req, res) => {
    bcrypt.hash(req.body.password, 10)
       .then(hash => {
           const user = new User({
               firstname: req.body.firstname,
               lastname: req.body.lastname,
               email: req.body.email,
               password: hash
           })
           user.save()
             .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
             .catch(error => res.status(400).json({ error }))
       })
       .catch(error => res.status(500).json({ error: 'test' }))
}

module.exports.signin = async(req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
          if (!user) {
              return res.status(401).json({ error: 'Utilisateur non trouvé !' })
          }
          bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ error: 'Mot de passe incorrect !' })
                }
                res.status(200).json({
                    userId: user.id,
                    token: jwt.sign(
                        { userId: user.id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                })
            })
            .catch(error => res.status(500).json({ error }))
      })
      .catch(error => res.status(500).json({ error }))
}
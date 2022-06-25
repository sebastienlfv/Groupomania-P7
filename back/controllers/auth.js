const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


module.exports.signup = async (req, res) => {
    // Params
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var password = req.body.password

    if (email == null || firstname == null || lastname == null || password == null) {
        return res.status(400).json({ error: 'missing parameters' })
    }

    User.findOne({
        attributes: ['email'],
        where: { email: email }
    })
    .then(function(userFound){
        if (!userFound) {

            bcrypt.hash(password, 10, function(err, hash){
                var newUser = User.create({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: hash
                })
                .then(function(newUser){
                    return res.status(201).json({
                        'userId': newUser.id
                    })
                })
                .catch(function(err){
                    return res.status(500).json({ error: 'cannot add user' })
                })
            })
        } else {
            return res.status(409).json({ error :'user already exist' })
        }
    })
    .catch(function(err){
        return res.status(500).json({ error: 'unable to verify user' })
    })
}

module.exports.signin = async (req, res) => {
    // Params
    var email = req.body.email
    var password = req.body.password

    if(email == null || password == null) {
        return res.status(400).json({ error: 'missing parameters' })
    }

    User.findOne({
        where: { email: email }
    })
    .then(function(userFound){
        if(userFound) {

            bcrypt.compare(password, userFound.password, function(errHash, resHash){
                if(resHash){
                    return res.status(200).json({
                        'userId': userFound.id,
                        'token': jwt.sign(
                            { userId: userFound.id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '1h' }
                         
                        ),
                        'email': userFound.email
                    })
                } else {
                    return res.status(403).json({ error: 'Invalid password' })
                }
            })
        } else {
            return res.status(404).json({ error: 'user not exist in DB' })
        }
    })
    .catch(function(err){
        return res.status(500).json({ error: 'unable to verify user' })
    })
}
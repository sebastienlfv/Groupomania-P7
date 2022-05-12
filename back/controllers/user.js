const userModel = require('../models/user')

module.exports.signup = async (req, res) => {
    console.log(req.body);
    const {pseudo, email, password} = req.body

    try {
        const user = await userModel.create({pseudo, email, password})
        res.status(201).json({ user: user._id })
    }
    catch(err) {
        res.status(400).send({ err })
    }
}
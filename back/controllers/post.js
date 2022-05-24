const { post } = require('../app')
const user = require('../middleware/user')
const postModel = require('../models/post')

module.exports.readPost = async (req, res) => {
  postModel.findAll()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}

module.exports.createPost = async (req, res) => {
  const post = new postModel({
      ...req.body
  })
  post.save()
    .then(() => res.status(201).json({ message: 'Post enregistré !' }))
    .catch(error => res.status(400).json({ error }))
}

module.exports.updatePost = async (req, res) => { 
  await postModel.update(
    {
      message: req.body.message,
      picture: req.body.picture,
    },
    {
      where: { id: req.params.id }
    }
  )
  .then(() => res.status(200).json({ message: 'Post modifié !' }))
  .catch(error => res.status(400).json({ error }))
}

module.exports.deletePost = (req, res) => {
  postModel.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: 'Post supprimé !' }))
    .catch(error => res.status(400).json({ error }))
}

module.exports.commentPost = (req, res) => {
  try {
    return postModel.findByPk(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text
          }
        }
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err)
      }
    )
  } catch(error) {
    return res.status(400).send(err)
  }
}

module.exports.deleteCommentPost = (req, res) => {
    
}

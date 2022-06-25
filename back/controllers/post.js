const { post } = require('../app')
const user = require('../middleware/user')
const postModel = require('../models/post')

module.exports.readPost = async (req, res) => {
  postModel.findAll({
    order: [
      ['id', 'DESC']
    ]
  })
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}

module.exports.createPost = async (req, res) => {
  const post = new postModel({
      ...req.body,
      // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
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

module.exports.likeSauce = (req, res) => {

  postModel.findOne({ id: req.params.id }, {}, (err, elemFrombase) => {
    const like = req.body.like
    const userId = req.body.userId
    const postId = req.params.id

    switch(like) {
      case 1: 
        postModel.update({ id: postId }, {
          $inc: { likes: +1 },
          $push: { userLiked: userId },
        })
        .then(() => res.status(201).json({ message: 'Un like a été ajouté !' }))
        .catch(error => res.status(400).json({ error }))
        break;
      case 0:
        if(elemFrombase.userLiked.includes(req.body.userId) && req.body === 0){
          postModel.update({ id: postId }, {
            $inc: { likes: -1 },
            $pull: { userLiked }
          })
          .then(() => res.status(200).json({ message: 'Un like à été enlevé' }))
          .catch(error => res.status(400).json({ error }))
        }
    }
  })
}
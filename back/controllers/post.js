const { post } = require('../app')
const user = require('../middleware/user')
const postModel = require('../models/post')
const fs = require('fs')

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
  console.log(req)
  const decodedReq = JSON.parse(req.body.publication)
  const urlImage = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  const post = new postModel({
      userId: decodedReq.userId,
      message: decodedReq.message,
      picture: urlImage
  })
  post.save()
    .then(() => res.status(201).json({ message: 'Post enregistré !', pictureURL: urlImage }))
    .catch(error => res.status(400).json({ error }))
}

module.exports.updatePost = async (req, res) => { 
  await postModel.update(
    {
      message: req.body.message,
      picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
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
/*  const urlImage = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  postModel.findOne({ where: { id: req.params.id } })
    .then(post => {
      const filename = urlImage.split('/images/')[1]
      fs.unlink(`images/${filename}`, () => {
        postModel.destroy({ where: { id: req.params.id } })
          .then(() => res.status(200).json({ message: 'Post supprimé !' }))
          .catch(error => res.status(400).json({ error }))
      })
    })*/
}

module.exports.likePost = async (req, res) => {
  let storageUserLiked = []
  const result = await postModel.findOne({where: {id: req.params.id}})
  const userId = req.body.userId

  // bien séparer les logique d'ajout et de retrait du tableau avec un swtich
  // et vérifier lors du retrait que si la longueur du tableau est de 0 alors il faut lui dire que le tableau est égal a null

  switch(req.body.isLikeOrUnlike) {
    case 1:
      if (result.dataValues.usersLiked !== null ) {
        console.log ('type', typeof result.dataValues.usersLiked)
        storageUserLiked = JSON.parse(result.dataValues.usersLiked);
        storageUserLiked.push(userId)
      } else {
        storageUserLiked.push(userId)
      }
      break;
    case 0:
      if (storageUserLiked.includes(userId)) {
        storageUserLiked.splice(userId, 1)
      }
      break;
  }


/*  if (result.dataValues.usersLiked !== null ) {
    console.log ('type', typeof result.dataValues.usersLiked)
    storageUserLiked = JSON.parse(result.dataValues.usersLiked);
    storageUserLiked.push(userId)
  } else {
    storageUserLiked.push(userId)
  }*/
  postModel.findOne({ where: { id: req.params.id }})
    .then(() => {
      postModel.update(
        {
          usersLiked: JSON.stringify(storageUserLiked)
        },
        { where: { id: req.params.id }}
      )
      .then((post) => {
        console.log('post', post)
        res.status(200).json({ usersLikedUpdated : storageUserLiked })
      }).catch((err) => {
      res.status(404).json({ err })
    })
  })
}

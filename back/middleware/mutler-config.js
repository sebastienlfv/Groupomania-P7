const multer = require('multer');
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

let counter = 1
let prevRandom = 1

const random = (max = 100) => {
  time = new Date().getTime()
  randomValue = ((time / counter) / (prevRandom + 1)) % max
  counter++
  prevRandom = randomValue
  return parseInt(randomValue)
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + random())
  }
});

module.exports = multer({storage: storage}).single('image');
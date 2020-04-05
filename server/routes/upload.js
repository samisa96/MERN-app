require('dotenv').config();
const multer = require("multer");
const router = require('express').Router();
const cloudinary = require("cloudinary").v2;
const Product = require("../models/products");
const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});


const upload = multer({ storage });

// express route where we receive files from the client
// passing multer middleware
router.post('/', upload.single('file'), (req, res) => {
  const file = req.file; // file passed from client
  const meta = req.body; // all other values passed from the client, like name, etc..
    console.log(req.body); 
    console.log(file);
    cloudinary.uploader.upload(file.path, (err, result) => {
      const urlCreated = result.secure_url;

      console.log(err, result);
      const newProduct = new Product({
        productName: meta.productname,
        productDescription: meta.description,
        uploaderContact: meta.contact,
        inititalBid: meta.startingBid,
        deadline: meta.deadline,
        imageURL: urlCreated
      });
      newProduct.save();
    })


});








module.exports = router;


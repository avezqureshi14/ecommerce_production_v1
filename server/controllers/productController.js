const Product = require("../models/productModel");


//Create Product -- Admin
exports.createProduct = async (req, res, next) => {
    // let images = [];
  
    // if (typeof req.body.images === "string") {
    //   images.push(req.body.images);
    // } else {
    //   images = req.body.images;
    // }
  
    // const imagesLinks = [];
  
    // for (let i = 0; i < images.length; i++) {
    //   const result = await cloudinary.v2.uploader.upload(images[i], {
    //     folder: "products",
    //   });
  
    //   imagesLinks.push({
    //     public_id: result.public_id,
    //     url: result.secure_url,
    //   });
    // }
  
    // req.body.images = imagesLinks;
    // req.body.user = req.user.id;
  
    const product = await Product.create(req.body);
  
    res.status(201).json({
      success: true,
      product,
    });
  };

//get all Products
exports.getAllProducts = async(req,res) => {
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}
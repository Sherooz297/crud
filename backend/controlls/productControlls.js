const Product = require("../model/productModle")

//Create Prodyct


exports.createProduct=async(req,res,next)=>{
    try {
        const {
            name,
            discription,
            price
        }= req.body
    
        const product=await Product.create({
            name,
            discription,
            price
        })
res.status(200).json({
    success:true,
    product
})    
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        }) 
    }
}

exports.getAllProducts = async (req, res, next) => {
    try {
      const products = await Product.find();
  
      if (products.length === 0) {
        // Handle the case when no products are found
        return res.status(404).json({ error: 'No products found.' });
      }
  
      // Send the products as a response
      res.status(200).json({ 
        success:true,
        products
     });
    } catch (error) {
      // Handle any errors that occur during product retrieval
     
    }
  };


  exports.getSingleProducts = async (req, res, next) => {
    try {
      const products = await Product.findById(req.params.id)
  
      if (products.length === 0) {
        // Handle the case when no products are found
        return res.status(404).json({ error: 'No products found.' });
      }
  
      // Send the products as a response
      res.status(200).json({ 
        success:true,
        products
     });
    } catch (error) {
      // Handle any errors that occur during product retrieval
     
    }
  };


  exports.deleteProduct = async (req, res, next) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
  
      if (!product) {
        // Handle the case when the product is not found
        return res.status(404).json({ error: 'No product found.' });
      }
  
      // Send the success message as a response
      res.status(200).json({ 
        success: true,
        message: 'Delete success'
      });
    } catch (error) {
      // Handle any errors that occur during product deletion
      return res.status(500).json({ error: 'Internal server error.' });
    }
  };

  exports.updateProduct = async (req, res, next) => {
    try {
        const {
            name,
            discription,
            price
        }= req.body
        const updatedProduct={name,discription,price}
      const product = await Product.findByIdAndUpdate(req.params.id,updatedProduct);
  
      if (!product) {
        // Handle the case when the product is not found
        return res.status(404).json({ error: 'No product found.' });
      }
  
      // Send the success message as a response
      res.status(200).json({ 
        success: true,
        message: 'update success'
      });
    } catch (error) {
      // Handle any errors that occur during product deletion
      return res.status(500).json({ error: 'Internal server error.' });
    }
  };
  
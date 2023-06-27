const express=require("express")
const { createProduct, getAllProducts, deleteProduct, updateProduct, getSingleProducts } = require("../controlls/productControlls")

const routes=express.Router()

routes.route("/create-product").post(createProduct)

routes.route("/get-product").get(getAllProducts)

routes.route("/single-product/:id").get(getSingleProducts)


routes.route("/delete-product/:id").delete(deleteProduct)

routes.route("/update-product/:id").put(updateProduct)



module.exports=routes;
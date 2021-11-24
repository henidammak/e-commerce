const Product = require("../models/Product");

exports.add=async(req,res)=>{
    const{categorie,name,poids,prix,quantité, image}=req.body;
    try {
         const newProduct = new Product ({
            categorie,
            name,
            poids,
            prix,
            quantité,
            image
            
        })
       
           await newProduct.save()
           res.send(newProduct)
       } catch (error) {
           res.send('post error')
       }
    }
        

    exports.get=async(req,res)=>{
        try {
            let products=await Product.find()
            res.send(products)
        } catch (error) {
            res.send('get error')
        }
    }

    exports.getOne= async(req,res) =>{
        try {
            let products = await Product.findById(req.params.id)
            res.send(products)
        } catch (error) {
            res.send('get one error')
        }
    }

    exports.deletee=async(req,res) =>{
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.send('product successfully deleted')
        } catch (error) {
            res.send('delete error')
        }
    }

    exports.put=async(req,res) =>{
        try {
            let productUpdated= await Product.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
            res.send(productUpdated)
        } catch (error) {
            res.send('put error')
        }
    }
  
   
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  categorie: String,
  name: String,
  poids: String,
  prix: Number,
  quantité: Number,
  image: String,
});
module.exports = mongoose.model("Product", productSchema);

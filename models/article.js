const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  snippet: String,
  url: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

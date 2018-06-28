const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
const mongoose = require('mongoose')
const articleController = require('./controllers/articleController');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");


// Define API routes here
app.get('/nyt/search/:term/:start/:end', (req,res)=>{
  let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    console.log(req.params.term, req.params.start, req.params.end);
    axios.get(queryURL, {
      params: {
        'api-key': '705deda7b6f44826a9a3253452ebd858',
        fq: req.params.term,
        begin_date: `${req.params.start}0101`,
        end_date: `${req.params.end}1231`,
        fl:"_id,web_url,pub_date,headline,byline,snippet"
      }
    })
    .then(data=>{
      console.log(data.data.response.docs);
      res.json(data.data.response.docs);
    }).catch(err=>{
      res.json(err);
    })
  
})
app.get('/articles', articleController.findAll)
app.post('/articles', articleController.create)
app.delete('/articles/:id', articleController.remove)
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

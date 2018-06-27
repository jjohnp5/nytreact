const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Define API routes here
app.get('/nyt/search/:term/:start/:end', (req,res)=>{
  let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    // var queryUrl = `${queryURL}api-key=?q=${req.params.term}`
    // if (parseInt(req.params.start)) {
    //     queryURL = `${queryURL}?begin_date=${req.params.start}0101`;
    //   }
    //   if (parseInt(req.params.end)) {
    //     queryURL = `${queryURL}?end_date=${req.params.end}0101`;
    //   }
    //   console.log(queryUrl);
    console.log(req.params.term);
    axios.get(queryURL, {
      params: {
        'api-key': '705deda7b6f44826a9a3253452ebd858',
        q: req.params.term
      }
    })
    .then(data=>{
      console.log(data.data.response.docs);
      res.json(data.data.response.docs);
    }).catch(err=>{
      res.send(err);
    })
  
})
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

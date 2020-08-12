let express = require('express');
let bodyParser = require("body-parser")
let app = express();
let numberOfResults = Math.floor(Math.random() * 10000 + 1);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/:userName/:urlName', (req, res) => {
  const requestedUrl = req.params.urlName;
  const user = req.params.userName;
  res.render('index', {urlName: requestedUrl, userName: user});
});

app.get('/', (req, res) => {
  res.render('search');
});

app.post("/search", (req, res) => {
  const userName = req.body.user;
  const searchName = req.body.search;

  res.redirect("/"+userName+"/"+searchName)
});

app.get('/:searchPage', (req, res) => {
  res.send("<h1>" + req.params.searchPage+ "</h1>")
});

app.listen(3000, () => console.log('App listening on port 3000!'));

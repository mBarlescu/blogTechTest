const express = require('express')
const app = express();
const bodyParser = require("body-parser");


const pg = require("pg");

const client = new pg.Client({
  user     : "development",
  password : "development",
  database : "blog",
  host     : "localhost",
  port     : "5432",
});
// const connectionString = 'postgres://localhost:5432/blog';

// const client = new pg.Client(connectionString);

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', (req, res) => {
  // res.render('index')
  res.redirect('/posts')
});

app.get('/posts', (req, res) => {
  client.connect()

client.query('SELECT * FROM blog ORDER BY id DESC', (err, result) => {
  const template ={
    blog: result.rows
  }
  res.render('posts', template);
  // client.end()
})

})


app.get('/posts/submit', (req, res) => {
  res.render('postsSubmit')

})

app.post('/posts/submit', (req,res) => {
  client.connect()

  client.query("INSERT INTO blog(title, description, email) VALUES($1, $2, $3)",
    [req.body.title, req.body.description, req.body.email]);

    res.redirect('/posts');
    // client.end();
  });

app.listen(3000, () => {
  console.log('listening on 3000')
})
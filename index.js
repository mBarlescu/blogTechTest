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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/posts', (req, res) => {
  client.connect()

client.query('SELECT * FROM blog', (err, result) => {
  console.log(err ? err.stack : result.rows[0].message)
  // console.log(result.rows);
  // let blog = result.rows[1]

  // const blogs = result.rows;
  // blogs.forEach(function(blog) {
  //   console.log('each blog', blog)
  // })
  // console.log('here2', result.rows)
  // console.log(result.rows[0].id);
  const template ={
    blog: result.rows
    // blogID: result.rows[0].id,
    // blogTitle: result.rows[0].title,
    // blogDescription: result.rows[0].description,
    // blogEmail: result.rows[0].email
  }
    // console.log(blog)
  console.log(template);
  console.log('here', template.blog[0])
  // console.log(result.rows[3]);

  res.render('posts', template);
  client.end()
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
    client.end();
  });

app.listen(3000, () => {
  console.log('listening on 3000')
})
# blogTechTest

Express app with postgresql database, implementing ejs files.

To get the database setup make sure postgresql is implemented.
Then, in the CLI of a new repo, type in: 'createdb blog'
You can now type in your CLI: 'psql -f widgets.sql'
The database should now be set up for this app.

Type 'node index.js' into your CLI to start the server.

Visit 'http://localhost:3000/posts/submit' to create a post. And to view all posts, visit 'http://localhost:3000/posts'

Currently the App has a bug, where if the /posts page is refreshed the server shuts down.
I will continue working on the app.


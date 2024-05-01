// imports 

const express = require('express');
const booksRoutes =
 require('./routes/books.routes');


/* App Configurations */
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

/* Routers */
app.use(booksRoutes);



app.listen(3000, () =>{
    console.log(`server started at http://localhost:3000`)
});


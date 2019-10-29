const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
var app = express();

const {Pool} = require('pg');
var pool;
pool = new Pool({
  connectionString:process.env.DATABASE_URL
});
pool.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req,res) =>{
  var create_table = `create table if not exists users(id serial, username text, password char(50))`
    pool.query(create_table, (error, result) => {
    });
    res.render('pages/home');
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

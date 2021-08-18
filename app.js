const express = require('express');
const path = require('path');
const app = express();
// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();

const port = process.env.PORT || 4000;

// express config
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('index', { title: 'Online Store | Home Page'});
})

app.get('/about', (req, res)=>{
  res.render('about')
})

app.get('/contact', (req, res)=>{
  res.render('contact')
})

app.listen(port, ()=>{
  console.log('server now up and running on port ' + port);
})

// exports.app = functions.https.onRequest(app);
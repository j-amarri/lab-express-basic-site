const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/about', (request, response) => {
  response.render('about');
  //response.sendFile(__dirname + '/views/about.html');
});
app.get('/home', (request, response) => {
  response.render('home');
  //response.sendFile(__dirname + '/views/home.html');
});
app.get('/songs', (request, response) => {
  response.render('songs');
  //response.sendFile(__dirname + '/views/songs.html');
});
app.get('*', (request, response) => {
  response.render();
  //response.send('Page under construction');
});

app.listen(3000);

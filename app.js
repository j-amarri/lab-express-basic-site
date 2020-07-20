const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});
app.get('/songs', (request, response) => {
  response.sendFile(__dirname + '/views/songs.html');
});
app.get('*', (request, response) => {
  response.send('Page under construction');
});

app.listen(3000);

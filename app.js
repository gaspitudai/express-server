require('dotenv').config();
const Server = require('./models/server');

const server = new Server();
server.listen();


// require('dotenv').config();
// const express = require('express');
// const hbs = require('hbs');

// const app = express();
// const port = process.env.PORT;

// app.set('view engine', 'hbs');
// hbs.registerPartials(`${__dirname}/views/partials`, () => {});

// app.use(express.static('public'));

// const data = {
//     name: 'gaspi.lara',
//     title: 'Node Course',
// }

// app.get('/', (req, res) => res.render('home', data));
// app.get('/home', (req, res) => res.render('home', data));
// app.get('/generic', (req, res) => res.render('generic', data));
// app.get('/elements', (req, res) => res.render('elements', data));

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });
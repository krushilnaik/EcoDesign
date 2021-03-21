const express = require('express');
const exphbs = require('express-handlebars');
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config();

const routes = require('./routes/routes');

// Initialize the application and create my port
const app = express();
const PORT = process.env.PORT || 8080;

// setting up the body parsing for static and routing middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// bring in routes
app.use('/', routes);

app.engine('hbs', exphbs({
	layoutsDir: __dirname + '/views/layouts',
	partialsDir: __dirname + '/views/partials',
	defaultLayout: 'layout',
	extname: '.hbs'
}));

app.set('view engine', 'hbs');

// start my server
app.listen(PORT, () => console.log(`Started server on PORT: ${PORT}`));

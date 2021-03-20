const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./routes/routes');

// Initialize the application and create my port
const app = express();
const PORT = process.env.PORT || 8080;

// setting up the body parsing for static and routing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// bring in routes
app.use('/', routes);

app.engine('hbs', exphbs({
	layoutsDir: __dirname + '/views',
	defaultLayout: 'layouts/layout',
	extname: '.hbs'
}));

app.set('view engine', 'hbs');

// start my server
app.listen(PORT, () => console.log(`Started server on PORT: ${PORT}`));

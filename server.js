const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./routes/routes');

// Initialize the application and create my port
const app = express();
const PORT = process.env.PORT || 3000;

// setting up the body parsing for static and routing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// bring in routes
app.use('/', routes);

app.engine('hbs', exphbs({
	defaultLayout: 'index',
	extname: '.hbs'
}));

app.set('view engine', 'hbs');

// start my server
app.listen(PORT, () => console.log(`Started server on PORT: ${PORT}`));

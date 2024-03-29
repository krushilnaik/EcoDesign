const express = require('express');
const exphbs = require('express-handlebars');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require("dotenv").config();

const routes = require('./routes/routes');

// Initialize the application and create my port
const app = express();
const PORT = process.env.PORT || 8080;

// setting up the body parsing for static and routing middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// bring in routes
app.use('/', routes);

app.engine('hbs', exphbs({
	layoutsDir: './backend/views/layouts',
	partialsDir: './backend/views/partials',
	defaultLayout: 'layout',
	extname: '.hbs',
	helpers: {
		isJSX: function(/**@type {string}*/ value, options) {
			const fnTrue = options.fn;
			const fnFalse = options.inverse;

			return value.endsWith('.jsx') ? fnTrue(this) : fnFalse(this);
		}
	}
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// establish connection to MondoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;

console.log('Connecting to MongoDB...');
connection.once('open', () => console.log('Established connection to MongoDB'));

// start my server
app.listen(PORT, () => console.log(`Started server on PORT: ${PORT}`));

const router = require('express').Router();

let Products = require('../models/Product.model');

router.get('/', (_req, res) => {
	// render homepage
	console.log('/');

	res.render('index', {
		pageTitle: 'Home',
		styles: ['index.css'],
		scripts: ['index.js']
	});
});

router.get('/shop', (_req, res) => {
	console.log('/shop');
	// render shop

	res.render('shop', {
		pageTitle: 'Shop',
		styles: ['shop.css'],
		scripts: ['shop.js']
	});
});

router.get('/api/products', (_req, res) => {
	console.log('received GET request to /api/products');
	Products.find().then(products => res.json(products));
});

router.get('*', (req, res) => {
	// render error page if given weird URL

	const url = req.originalUrl;
	console.log(url);

	res.render('error', {
		pageTitle: url.slice(1),
		url: url
	});
});

module.exports = router;

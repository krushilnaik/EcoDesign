const router = require('express').Router();
const { parse } = require('node-html-parser');
const { readFileSync } = require('fs');
const path = require('path');

let Products = require('../models/Product.model');

router.get('/', (_req, res) => {
	// render homepage
	console.log('/');

	const html = readFileSync(path.join(__dirname, '../views/index.hbs'));
	const content = parse(html.toString());

	var [css, body, scripts] = [
		content.querySelector("#css"),
		content.querySelector("body"),
		content.querySelector("#scripts")
	].map(element => element.innerHTML);

	res.render('layouts/layout', {
		pageTitle: 'Home',
		css: css.toString(),
		content: body.toString(),
		scripts: scripts.toString()
	});
});

router.get('/shop', (_req, res) => {
	console.log('/shop');
	// render shop

	const html = readFileSync(path.join(__dirname, '../views/shop.hbs'));
	const content = parse(html.toString());

	var [css, body, scripts] = [
		content.querySelector("#css"),
		content.querySelector("body"),
		content.querySelector("#scripts")
	].map(element => element.innerHTML);

	res.render('layouts/layout', {
		pageTitle: 'Shop',
		css: css.toString(),
		content: body.toString(),
		scripts: scripts.toString()
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
		pageTitle: url.slice(1).toUpperCase(),
		url: url
	});
});

module.exports = router;

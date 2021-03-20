const router = require('express').Router();
const { parse } = require('node-html-parser');
const { readFileSync } = require('fs');
const path = require('path');


router.get('/', (_req, res) => {
	// render homepage

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
	// render shop

	const html = readFileSync(path.join(__dirname, '../views/shop.hbs'));
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

router.get('*', (req, res) => {
	// render error page if given weird URL

	res.render('error', {
		pageTitle: req.originalUrl.slice(1),
		url: req.originalUrl
	});
});

module.exports = router;

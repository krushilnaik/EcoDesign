const router = require('express').Router();
const path = require("path");


router.get("/", (_req, res) => {
	// render homepage
});

router.get("/shop", (_req, res) => {
	// render shop
});

router.get("*", (_req, res) => {
	// render homepage if given weird URL
});

module.exports = router;

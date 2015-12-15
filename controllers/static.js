var express = require('express');
var router = require('express').Router();
var path = require('path');

router.get('/',function(req, res){
	console.log(path.join(__dirname, '../layouts', 'posts.html'));
	res.sendFile(path.join(__dirname, '../layouts', 'posts.html'));
});

router.use(express.static(__dirname + '/../assets'));

module.exports = router;
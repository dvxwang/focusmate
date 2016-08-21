'use strict';
var router = require('express').Router();
var db = require('../database')
var Sessions = db.model('sessions')
module.exports = router;

router.get('/', function(req, res, next) {
	Sessions.findAll()
	.then(function(sessions){
		res.send(sessions);
	}).catch(next);
});

router.post('/', function(req, res, next) {
	req.body.time = Date.now();
	Sessions.create(req.body)
	.then(function(sessions){
		res.send(sessions);
	}).catch(next);
});
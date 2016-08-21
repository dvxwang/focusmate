'use strict';
var path = require('path');
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://nrmqbrvzvjjrgl:vyXH0LwfO9eMGMaeWU2nwOuHt2@ec2-54-235-177-62.compute-1.amazonaws.com:5432/dbtrdgbm9qo17f');
// var db = new Sequelize('postgres://localhost:5432/focusmate');

require('./models/sessions')(db);

var Lecture = db.model('sessions');

module.exports = db;

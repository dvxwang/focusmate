'use strict';
var path = require('path');
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://nrmqbrvzvjjrgl:vyXH0LwfO9eMGMaeWU2nwOuHt2@ec2-54-235-177-62.compute-1.amazonaws.com:5432/dbtrdgbm9qo17f');
// var db = new Sequelize('postgres://localhost:5432/focusmate');

var User = require('./models/user')(db);
var Request = require('./models/request')(db);
var Session = require('./models/sessions')(db);

User.hasMany(Request);
Request.belongsTo(User);
Session.hasMany(Request);

module.exports = db;

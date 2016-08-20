'use strict';
var path = require('path');
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/focusmate');

require('./models/sessions')(db);

var Lecture = db.model('sessions');

module.exports = db;

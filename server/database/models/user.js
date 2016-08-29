'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {

    return db.define('user', {
        name: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        }
    });
};

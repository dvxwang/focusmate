'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {

    return db.define('sessions', {
        name: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        requestTime: {
            type: Sequelize.STRING,
        },
        timeZone: {
            type: Sequelize.STRING,
        },
    });
};

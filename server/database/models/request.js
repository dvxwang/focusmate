'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {

    return db.define('request', {
        requestTime: {
            type: Sequelize.STRING,
        },
        timeZone: {
            type: Sequelize.STRING,
        },
        matched: {
            type: Sequelize.STRING,
        },
        cancelled: {
            type: Sequelize.STRING,
        }
    });
};

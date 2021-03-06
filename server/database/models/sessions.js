'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {

    return db.define('session', {
        requestOne: {
            type: Sequelize.STRING,
        },
        requestTwo: {
            type: Sequelize.STRING,
        },
        sessionTime: {
            type: Sequelize.STRING,
        },
        cancellation: {
            type: Sequelize.STRING,
        }
    });
};

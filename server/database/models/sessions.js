'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {

    return db.define('sessions', {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        time: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });
};

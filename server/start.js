'use strict';
var chalk = require('chalk');
// var db = require('./database');

var server = require('http').createServer();

var startServer = function () {
    var PORT = process.env.PORT || 1234;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

startServer();
// db.sync().then(startServer)
// .catch(function (err) {
//     console.error(chalk.red(err.stack));
//     process.kill(1);
// });

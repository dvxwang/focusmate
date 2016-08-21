var chalk = require('chalk');
var db = require('./server/database');
var Sessions = db.model('sessions');

var seedSessions = function () {

    var sessionsToSeed = [
        {
            email: '123@example.com',
            time: Date.now()
        }
    ];

    return Sessions.bulkCreate(sessionsToSeed);
};

db.sync({ force: true })
.then(function () {
  return seedSessions()
})
.then(function () {
    console.log(chalk.green('Seed successful!'));
    process.kill(0);
})
.catch(function (err) {
    console.error(err);
    process.kill(1);
});

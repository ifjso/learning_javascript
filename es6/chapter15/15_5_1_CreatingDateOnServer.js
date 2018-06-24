const moment = require('moment-timezone');

console.log(new Date(Date.UTC(2016, 4, 27)));

console.log(moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate());
console.log(moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate());

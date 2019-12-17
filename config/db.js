
let mysql = require ('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'players'
});

module.exports = connection;
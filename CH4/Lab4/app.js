/**
 * Created by Administrator on 9/30/2015.
 */
var  _mysql = require('mysql');

var HOST = 'localhost';
//var PORT = 8080;
var MYSQL_USER = 'root';
var MYSQL_PASS = 'toor';
var DATABASE = 'CSC443';
var TABLE = 'Products';

var connection = _mysql.createConnection({
    host: HOST,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: DATABASE
});

//connection.connect();

connection.query('use ' + DATABASE);
connection.query('insert into '+ TABLE +' (ID, price) values (24, 50.00)');

connection.query('select id, price from ' + TABLE + ' where price < 12',
    function(err, result, fields) {
        if (err)
            throw err;
        else {
            for (var i in result) {
                var gadget = result[i];
                console.log(TABLE.name +': '+ TABLE.price);
            }
        }
    });
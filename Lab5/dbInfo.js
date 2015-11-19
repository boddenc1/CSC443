/**
 * Created by Administrator on 10/29/2015.
 */
var _mysql = require('mysql');

var HOST = 'localhost';
var PORT = 3306;
var MYSQL_USER = 'root';
var MYSQL_PASS = 'toor';
var DATABASE = 'test';
var TABLE = 'csc443';

var pool = _mysql.createPool({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: DATABASE
});

module.exports.pool = pool;
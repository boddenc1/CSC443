/**
 * Created by Administrator on 10/28/2015.
 */
var _mysql = require('mysql');
var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');

var items = [];

var router = express.Router();
router.use(bodyParser());
/*
 router.route('/')
 .get(function (req, res, next) {
 res.send({
 status: 'Items found',
 items: items
 });
 })
 .post(function (req, res, next) {
 items.push(req.body);
 res.send({
 status: 'Item added',
 itemId: items.length - 1
 });
 })
 .put(function (req, res, next) {
 items = req.body;
 res.send({ status: 'Items replaced' });
 })
 .delete(function (req, res, next) {
 items = [];
 res.send({ status: 'Items cleared' });
 });
 */
var HOST = 'localhost';
var PORT = 3306;
var MYSQL_USER = 'root';
var MYSQL_PASS = 'toor';
var DATABASE = 'test';
var TABLE = 'csc443';

var connection = _mysql.createConnection({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: DATABASE
});

var pool = _mysql.createPool({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: DATABASE
});

connection.connect(function (err) {
    if (!err)
        console.log("Database is connected..");
    else
        console.log("Error in connection...");
});

// Setup the item routes
router.route('/:id')
    .get(function (req, res, next) {
        var id = req.params['id'];
        if (id && items[Number(id)]) {
            pool.getConnection(function (err, connection) {
                connection.query('select price from csc443 where ?', get, function (err, result) {
                    if (!err) {
                        if (result[0] != null) {
                            res.send(result[0].price);
                        }
                    }
                    else
                        res.send("No product was found!");
                })
            });
        }
    })
    .post(function (req, res, next) {

    })
    .put(function (req, res, next) {

    })
    .delete(function (req, res, next) {

    })

    .all(function (req, res, next) {
        res.send(501, {status: 'Not implemented'});
    });


// Use the router
var app = express()
    .use('/todo', router)
    .listen(3000);

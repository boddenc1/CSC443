/**
 * Created by Administrator on 10/8/2015.
 */
var  _mysql = require('mysql');
var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');

var items = [];

var router = express.Router();
router.use(bodyParser());

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

var HOST = 'localhost';
var PORT = 3306;
var MYSQL_USER = 'root';
var MYSQL_PASS = 'toor';
var DATABASE = 'test';
var TABLE = 'csc443';

var connection = _mysql.createConnection({
    host: HOST,
    port :PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: DATABASE
});

var pool = _mysql.createPool({
    host: HOST,
    port :PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: DATABASE
});


function handleIncomingRequests(request, response){
    getPrice(request.url.replace("/", ""), function(err,data){
        var result;
        var httpcode = 200;

        if (err) {
            httpcode = 503;
            result = {
                error_code: 503,
                message: "Product ID: " + request.url.replace("/", "") + " does not exist"
            };
        } else {
            result = {
                product_id: request.url.replace("/", ""),
                price: data
            };
        }
        response.writeHead(httpcode, {"Content-Type": "application/json"});
        response.end(JSON.stringify(result) + "\n");
    });
}
var s = http.createServer(handleIncomingRequests);
s.listen(8080);


connection.connect(function(err){
    if(!err)
        console.log("Database is connected..");
    else
        console.log("Error in connection...");
});

function getPrice(product_id, callback){
    var get = {id: product_id};
    pool.getConnection(function (err, connection) {

        connection.query('select price from csc443 where ?', get, function (err, result) {

            if (!err) {
                if (result[0] != null) {
                    callback(null, result[0].price)
                }
                else
                    callback("Product was not found", null);
            }
            else
                callback(err, null);
        })
    });
}

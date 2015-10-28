/**
 * Created by Administrator on 10/7/2015.
 */
//var  _mysql = require('mysql');
//var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var items = [];

var router = express.Router();
router.use(bodyParser());

router.route('/')
    .get(function(req, res, next){
        res.send({
            status:'Items found',
            items:items
        });
    })
    .post(function(req, res, next){
        items.push(req.body);
        res.send({
            status:'Item added',
            itemsId: items.length -1
        });
    })
    .put(function(req, res, next){
        items = req.body;
        res.send({status:'Items replaced'});
    })
    .delete(function(req, res, next){
        items = [];
        res.send({status:'Items cleared'});
    });

//Set up the item routes
router.route('/:id')
    .get(function(req, res, next){
        var id = req.params['id'];
        if(id && items[Number(id)]){
            res.send({
                status: 'Item Found',
                item: items[Number(id)]
            });
        }
    else{
            res.send(404, {status: 'Not found'});
        }
    })
    .all(function(req,res, next){
        res.send(501, {status:'Not Implemented'});
    });

//use router
var app = express()
    .use('/todo', router)
    .listen(8080);

/*


 //Add under the router.route('/:id')
.get(function(req,res, next){
    getPrice(req.params['id'], function(err, data){
        if(data){
            res.send({
                status:'Item Found',
                item: req.params['id'],
                price: data
            });
        }
        else
            res.send(404,{status:'Not found'});
    });
})

/*

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

*/
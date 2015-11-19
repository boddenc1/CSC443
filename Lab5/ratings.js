/**
 * Created by Administrator on 10/29/2015.
 */
var db = require('./dbInfo.js');

var nodeCache = require( "node-cache" );
var dbCache = new nodeCache();

var getRating = function getRating(product_id, callback) {

    var sql = 'SELECT AVG(rating) FROM RATINGS WHERE ?';
    var cachedData = getFromCache(product_id);

    if(cachedData!=null){
        console.log("Getting cached data:" + cachedData);
        callback(null,cachedData);
    }else {
        var get = {product_id: product_id};
        db.pool.getConnection(function (err, connection) {
            // Use the connection
            connection.query(sql, get, function (err, results) {
                if (!err) {
                    if (results[0] != null) {
                        console.log(results)
                        dbCache.set(sql+product_id, results, 10000 );
                        callback(null, results);
                    } else {
                        callback("Product not found.", null);
                    }
                } else {
                    callback(err, null);
                }
                //release
                connection.release();
            });
        });
    }
}

var deleteRating = function deleteProduct(product_id, callback) {

    var get = {product_id: product_id};
    db.pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query('DELETE FROM RATINGS ?', get, function (err, results) {
            if (!err) {
                if (results != null) {
                    callback(null, results);
                } else {
                    callback(err, null);
                }
            } else {
                callback(err, null);
            }
            //release
            connection.release();
        });

    });
}
var getRatings = function getRatings(callback) {
    var sql = 'SELECT * FROM RATINGS';
    var cachedData = getFromCache(sql);

    if(cachedData!=null){
        console.log("Getting cached data:" + cachedData);
        callback(null,cachedData);
    }else {
        db.pool.getConnection(function (err, connection) {
            // Use the connection
            connection.query(sql, function (err, results) {
                if (!err) {
                    if (results != null) {
                        dbCache.set( sql, results, 10000 );
                        callback(null, results);
                    } else {
                        callback(err, null);
                    }
                } else {
                    callback(err, null);
                }
                //release
                connection.release();
            });

        });
    }
}
var insertRating = function insertRating(data, callback) {

    var get = {product_id: data.product_id, rating: data.rating};
    db.pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query('INSERT INTO RATINGS SET ?', get, function (err, results) {
            if (!err) {
                if (results != null) {
                    callback(null, results);
                } else {
                    callback(err, null);
                }
            } else {
                callback(err, null);
            }
            //release
            connection.release();
        });

    });
}

var getFromCache = function (id) {
    var result = null;
    dbCache.get(id, function (err, value) {
        if (!err) {
            if (value == undefined) {
                // key not found
            } else {
                result = value;
            }
        }
    });
    return result;
};

module.exports.insertRating = insertRating;
module.exports.deleteRating = deleteRating;
module.exports.getRating = getRating;
module.exports.getRatings = getRatings;
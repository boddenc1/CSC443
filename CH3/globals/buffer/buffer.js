/**
 * Created by Administrator on 9/16/2015.
 */
//a string
var str = "Hello Buffer World";

//String to Buffer
var buffer = new Buffer(str, 'utf-8');

//Bruffer to String
var roundtrip = buffer.toString('utf-8');
console.log(roundtrip);
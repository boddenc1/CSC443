/**
 * Created by Administrator on 9/16/2015.
 */
var t1 = new Date().getTime();
var foo1 = require('./foo');
console.log(new Date().getTime() - t1);

var t2 = new Date().getTime();
var foo2 = require('./foo');
console.log(new Date().getTime() - t2);
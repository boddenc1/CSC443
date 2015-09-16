/**
 * Created by Administrator on 9/16/2015.
 */
var foo = require('./foo');
console.log('initial someithng:', foo.something);

//Now modify
foo.something = 456;

//Now load bar
var bas = require('./bar');


/**
 * Created by Administrator on 9/16/2015.
 */
var fs = require('fs');

fs.writeFileSync('test.txt', 'Hello.fs');
console.log(fs.readFileSync('test.txt').toString());
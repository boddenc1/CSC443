/**
 * Created by Administrator on 9/30/2015.
 */
var argv = require('optimist').argv;

delete argv['$0'];
console.log(argv);
/**
 * Created by Administrator on 9/16/2015.
 */
var os = require('os');
var gigabyte = 1/(Math.pow(1024,3));
console.log('Total Memory:', os.totalmem() * gigabyte, ' GBs');
console.log('Available Memory:', os.freemem() * gigabyte, ' GBs');
console.log('Percent consumed:', 100 * (1-os.freemem() / os.totalmem()));
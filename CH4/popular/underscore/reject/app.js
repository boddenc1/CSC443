/**
 * Created by Administrator on 9/30/2015.
 */
var _ = require('underscore');
var odds = _.reject([1,2,3,4,5,6], function(num){return num % 2 == 0;});
console.log(odds);
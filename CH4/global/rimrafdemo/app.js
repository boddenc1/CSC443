/**
 * Created by Administrator on 9/30/2015.
 */
var rimraf = require ('rimraf');

rimraf('./foo', function (err) {
    if (err) console.log('Error Occured', err);
    else console.log('Directory foo deleted');
})
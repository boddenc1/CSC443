/**
 * Created by Administrator on 9/16/2015.
 */
var path = require('path');

//Fixes up .. and .
// long on unix: /foo
// logs on windows: \foo
console.log(path.normalize('/foo/bar/..'));

//also removes duplicate '//' slashes
console.log(path.normalize('/foo//bar/bas/..'));
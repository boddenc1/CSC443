/**
 * Created by Administrator on 9/16/2015.
 */
var fs = require('fs');

fs.unlink('./test.txt.', function(err){
    if(err)
        console.log('Error', err);
    else
        console.log('test.txt seuccessfully deleted');
});

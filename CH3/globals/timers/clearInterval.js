/**
 * Created by Administrator on 9/16/2015.
 */
var count = 0;
var internalObject = setInterval(function(){
    count++;
    console.log(count, 'seconds passed');
    if(count == 5){
        console.log('exciting');
        clearInterval(internalObject);
    }
}, 1000);
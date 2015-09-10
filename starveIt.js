/**
 * Created by Administrator on 9/10/2015.
 */
function fibonnaci(n) {
    if (n < 2)
        return 1;
    else
        return fibonnaci(n - 2) + fibonnaci(n - 1);
}

//setup timer
console.time('timer');
setTimeout(function() {
    console.timeEnd('timer'); // prints mmore than 1000ms
},1000)

fibonnaci(44);
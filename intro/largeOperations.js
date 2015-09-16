/**
 * Created by Administrator on 9/10/2015.
 */
console.time('timeit');
function fibonnaci(n) {
    if (n < 2)
        return 1;
    else
        return fibonnaci(n - 2) + fibonnaci(n - 1);
}
fibonnaci(44);
console.timeEnd('timeit');
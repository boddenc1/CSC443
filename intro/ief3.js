/**
 * Created by Administrator on 9/9/2015.
 */
var foo = 123;
if(true)
{
    (function() {
        var foo = 456;
    })();
}
console.log(foo); // 123
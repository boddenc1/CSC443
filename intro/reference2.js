/**
 * Created by Administrator on 9/10/2015.
 */
var foo = {bas:123};
var bar = {bas: foo.bas}; // copy

bar.bas = 456; // change copy
console.log(foo.bas);
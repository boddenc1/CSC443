/**
 * Created by Administrator on 9/30/2015.
 */
var foo = [1, 10,50,200, 900, 90,40];

var rawResults =[]

for(i =0;i<foo.length; i++) {
    if (foo[i] > 100)
        rawResults.push(foo[i]);
}
console.log(rawResults);
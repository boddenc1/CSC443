/**
 * Created by Administrator on 9/10/2015.
 */
function outerFunction(arg){
    var variableinOuterFunction = arg;
    function bar(){
        console.log(variableinOuterFunction); // access a variable from the outer scope
    }
    bar();
}

outerFunction('hello closure!');
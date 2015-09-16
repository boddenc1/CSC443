/**
 * Created by Administrator on 9/14/2015.
 */
function someClass() {
    //propertis goes here
    this.someProperty = 'some initial Value';
}

//member functions go here
someClass.prototype.someMemberFunction = function(){
    //Do something like this
    this.someProperty = 'Modified Value';
}

//Creation
var instance = new someClass();

//Usage
console.log(instance.someProperty);
instance.someMemberFunction();
console.log(instance.someProperty);
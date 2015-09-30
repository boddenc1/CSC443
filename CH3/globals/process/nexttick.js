/**
 * Created by Administrator on 9/16/2015.
 */
process.nextTick(function(){
    console.log('next tick');
});
console.log('immediately');
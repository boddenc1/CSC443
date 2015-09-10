/**
 * Created by Administrator on 9/10/2015.
 */
function longRunningOperation(callback){
    setTimeout(callback, 3000);
}

function webRequest(request){
    console.log("Starting a long operation for request:", request.id);
    longRunningOperation(function(){
        console.log("ending a long operation for request:", request.id);
    });
}

webRequest({id:1});
webRequest({id:2});
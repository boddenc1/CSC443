/**
 * Created by Administrator on 9/10/2015.
 */
function handleClientRequest(request){
    makeDBCall(request.someinfo, function(result){
        //the request corresponds to the correct db result because of closure
        request.complete(result);
    });
}
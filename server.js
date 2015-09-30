/**
 * Created by Administrator on 9/17/2015.
 */
var http = require('http');

function handleIncomingRequests(request, response){
    //console.log(handleIncomingRequests);
    response.writeHead(200,{"Content-Type":"application/json"});
    response.write("Hello World!");
    var t = JSON.stringify(request.url);
    console.log(t.replace("/",""));
    chooseProduct(t.replace("/",""));
    response.end();
};


function chooseProduct(ID) {
    idArray = {"1234":{price:"$19.99"},"4321":{price:"$25.00"}, "2341":{price:"$30.00"}};
}

var s = http.createServer(handleIncomingRequests);
s.listen(8080);
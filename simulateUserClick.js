/**
 * Created by Administrator on 9/10/2015.
 */
function longRunningOperation(callback){
    //simulate 3 second operation
    setTimeout(callback, 3000);
}

function userClicked(){
    console.log("starting a long operation");
    longRunningOperation(function(){console.log("ending a long running operation");
    });
}

// simulate user click
userClicked();
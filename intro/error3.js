/**
 * Created by Administrator on 9/14/2015.
 */
setTimeout(function() {
    try {
        console.log('About to throw an error');
        throw new Error('Error Thrown');
    }
    catch (e) {
        console.log('Error caught');
    }
},1000);
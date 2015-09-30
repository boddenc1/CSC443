/**
 * Created by Administrator on 9/30/2015.
 */
var now = new Date();
console.log(now);

var milliSeconds = now.getMilliseconds();
var sec = now.getSeconds();
var min = now.getMinutes();
var hours = now.getHours();
var date = now.getDate();
var month = now.getMonth();
var year = now.getYear();
var dateCopy = new Date(year, month, date, hours, min, sec, milliSeconds);
console.log(dateCopy);

console.log(new Date(2014, 0, 1));
console.log(new Date(2014,0,1,9));
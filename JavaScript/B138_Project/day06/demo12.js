//this is an incorrect condition - the sequence is incorrect.
console.log('Start');

let marks = 65;
if (marks > 70) {
    console.log('First Class');
}else if (marks > 40) {
    console.log('Third Class');
}else if (marks > 60) {
    console.log('Second Class');
}else {
    console.log('Fail');
}
//output is Third class

//-------------------------------------------------

//this is corrected below with ranges
if (marks >= 70 && marks <= 100) {
    console.log('First Class');
}else if (marks >= 40 && marks < 60) {
    console.log('Third Class');
}else if (marks >= 60 && marks < 70) {
    console.log('Second Class');
}else {
    console.log('Fail');
}
//output is Second class


//------------------------------------------------------

console.log('End');
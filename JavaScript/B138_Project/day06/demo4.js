//in JS
//0 is treated as false, non zero is treated as true
//"" --> false, nonempty string is treated as true
//null, undefined as false
//[]-->true, {} --> true

console.log("Start");

if (0){
    console.log ('Hi');
}
else {
    console.log('bye');//this gets printed
}


if (""){
    console.log ('Hi');
}
else {
    console.log('bye');//this gets printed
}

if (null){
    console.log ('Hi');
}
else {
    console.log('bye');//this gets printed
}


if (undefined){
    console.log ('Hi');
}
else {
    console.log('bye');//this gets printed
}

if ([]){
    console.log ('Hi'); //this gets printed
}
else {
    console.log('bye');
}

if ({}) {
    console.log ('Hi'); //this gets printed 
}
else {
    console.log('bye');
}

console.log("End");
let s1="apple";
let s2="banana";
console.log(s1.localeCompare(s2));  //s1 <s2 --> -1
console.log(s2.localeCompare(s1));// s1>s2  --> 1

console.log("d".localeCompare("d"));//s1== s2--> 0


let s3="a";
let s4="b";
console.log(s3.localeCompare(s2));  //s3 <s4 --> -1
console.log(s4.localeCompare(s1));// s3>s4  --> 1

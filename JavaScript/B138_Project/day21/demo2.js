let msg="Js is easy";

let a=msg.split(" ");//input:String output:array
console.log(a);

let s=a.join(" ");//input:array output:string
console.log(s);


let s2=s.split(" ").join("");
console.log(s2);

let msg2="Js is easy";
console.log(msg2.replaceAll(" ",""));
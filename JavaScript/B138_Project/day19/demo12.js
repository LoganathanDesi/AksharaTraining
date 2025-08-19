let msg="ha ha ha ha";

let f=msg.indexOf("ha");
console.log(f);//0


let s=msg.indexOf("ha",f+1);
console.log(s);

let t=msg.indexOf("ha",s+1);
console.log(t);

console.log(msg.lastIndexOf('ha'));


console.log(msg.lastIndexOf('ha ha'));
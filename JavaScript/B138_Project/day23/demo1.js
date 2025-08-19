let s=new Set();
s.add(10);
s.add(20);
s.add(-2);
s.add(10);
console.log(s);
console.log(s.size);
console.log(s.has(10));//true
console.log(s.has(30));//false
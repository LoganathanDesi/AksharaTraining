let s=new Set();
s.add(10);
s.add(20);
s.add(-2);
s.add(10);

console.log(s);
s.delete(-2);
console.log(s);
s.clear();
console.log(s);
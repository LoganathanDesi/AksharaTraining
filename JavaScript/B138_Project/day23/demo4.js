let s=new Set();
s.add(10);
s.add(20);
s.add(-2);
s.add(10);
for(let v of s){
    console.log(v);
}

for(let v of s.keys()){
    console.log(v);
}

for(let v of s.entries()){
    console.log(v);
}

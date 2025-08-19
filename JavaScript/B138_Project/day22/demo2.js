let fruits=['apple','mango','grapes','orange'];
let FRUITS=[];
for(let f of fruits){
    FRUITS.push(f.toUpperCase());
}
console.log(FRUITS);
//----------------------------------------------------
FRUITS=fruits.map(f=>f.toUpperCase());
console.log(FRUITS);
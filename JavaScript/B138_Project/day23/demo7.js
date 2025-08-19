let a = [10,20,30,10,10,20];

let map = new Map();

for (let i of a)
{
    if (map.has(i)){
        let c = map.get(i);
        c++;
        map.set(i,c);
    }else{
        map.set(i,1);
    }
}

console.log(map);
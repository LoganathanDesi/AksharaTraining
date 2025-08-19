let a=['Idly','Dosa','Poori','Idly','Dosa','Dosa'];
let map=new Map();
//has get set
for(let v of a)
{
    if(map.has(v)){
        let c=map.get(v);
        c++;
        map.set(v,c);
    }
    else
    {
       map.set(v,1); 
    }
}

console.log(map);
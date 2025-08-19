let items=['laptop','mouse','key','cup','table','mobile','pen'];
let short=[];
//add only short items --> 3 letters items
for(let i of items)
{
    if(i.length<=3)
    {
        short.push(i);
    }
}

console.log(short);

short=items.filter(i=>i.length<=3);
console.log(short);
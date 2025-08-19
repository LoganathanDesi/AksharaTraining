let objArray = [
    {item:"shoe",price:100},
    {item:"shirt",price:200},
    {item:"pant",price:50},
    {item:"vallet",price:40},
];


sum = objArray.map(e=>e.price).reduce((f,s)=>f+s);

console.log(sum);
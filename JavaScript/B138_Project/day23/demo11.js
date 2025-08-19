let cart=[
{name:"Shoes", price:50},
{name:"Shirt", price:30},
{name:"Hat", price:20}
];

// let all_price= cart.map(item=>item.price);
// console.log(all_price);
// let total=all_price.reduce((f,s)=>f+s);
// console.log(total);

let total=cart.map(item=>item.price).reduce((f,s)=>f+s);
console.log(total);
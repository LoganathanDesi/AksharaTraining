let cart=[
{name:"Shoes", price:50},
{name:"Shirt", price:30},
{name:"Hat", price:20}
];

let a=cart.reduce((f,s)=>f+s.price,0);
console.log(a);
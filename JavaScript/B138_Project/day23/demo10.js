let people=[
{name:'akash',age:17},
{name:'ravi',age:47},
{name:'Surya',age:15},
{name:'bhanu',age:42},
];

let a=people.filter(p=>p.age>=18).map(p=>p.name);
console.log(a);
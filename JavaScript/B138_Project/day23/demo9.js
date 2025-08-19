let people=[
{name:'akash',age:17},
{name:'ravi',age:47},
{name:'Surya',age:15},
{name:'bhanu',age:42},
];
let adult=[];
people.filter(p=>p.age>=18).forEach(p=>adult.push(p.name));
console.log(adult);
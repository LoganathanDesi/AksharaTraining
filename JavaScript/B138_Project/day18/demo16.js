let student1={name:'Rakesh', age:25};
let student2={name:'Rakesh', age:25};

student1.name="ravi";

console.log(student1.name);//ravi
console.log(student2.name);//rakesh
//-----------------------------------------------------------

let emp1={name:'Rakesh', age:25};
let emp2=emp1;

emp1.name="ravi";

console.log(emp1.name);//ravi
console.log(emp2.name);//ravi

//-----------------------------------------------------------

let faculty1={name:'Bhanu', age:25};
let faculty2=Object.assign({},faculty1);//shallow copy

console.log(faculty1);
console.log(faculty2);

faculty1.name="Chandra";
console.log(faculty1);
console.log(faculty2);
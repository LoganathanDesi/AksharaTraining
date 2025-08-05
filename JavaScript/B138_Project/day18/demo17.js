//create new object by merging existing objects
let student1={id:1,name:'Ravi'};
let student2={city:'Pune',sub:'JS'};

// console.log(student1.id,student1['id']);

// let student3={id:1,name:'Ravi',city:'Pune',sub:'JS'};
// console.log(student3);

// let student3={id:student1['id'],name:student1['name'],city:student2['city'],sub:student2['sub']};
// console.log(student3);

let student3={...student1,...student2};
console.log(student3);

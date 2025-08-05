//objects present in array
let students=[
{name:'Rakesh', age:25},
{name:'Arjun', age:21},
{name:'Mounika', age:27},
]

// function read(student){
//     console.log(student.name);
// }
// let read=(student)=>{console.log(student.name);};

// students.forEach(read);

students.forEach((student)=>{console.log(student.name);});

students.forEach(student=>console.log(student.name, student.age));
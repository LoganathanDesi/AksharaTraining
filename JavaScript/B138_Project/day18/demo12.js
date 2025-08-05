//objects present in array
let students=[
{name:'Rakesh', age:25},
{name:'Arjun', age:21},
{name:'Mounika', age:27},
]

let student=students[0];
console.log(student.name);


function read(student){
    console.log(student.name);
}

let one_student=students[0];
read(one_student);
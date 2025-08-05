//objects present in array
let students=[
{name:'Rakesh', age:25},
{name:'Arjun', age:21},
{name:'Mounika', age:27},
]

function read(student){
    console.log(student.name);
}

students.forEach(read);//for each element of students array call read function
//looping
let student={
    id:1,
    name:'Ravi',
    age:20,
    subject:'javascript'
}


//console.log(student.length());

for(let key in student)
{
    console.log(key,student[key]);
}
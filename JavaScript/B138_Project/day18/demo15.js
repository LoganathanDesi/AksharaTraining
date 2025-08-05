let students=[
{name:'Rakesh', age:25},
{name:'Arjun', age:21},
{name:'Mounika', age:27},
]

students.forEach(student=>console.log(student.name));

for(let index in students)
{
    console.log(students[index].name);
}

for(let student of students)
{
    console.log(student.name);
}
// only pick the adult names from the array and create a new array

let people = [
    {name:'Loganathan', age:40},
    {name:'Ravi', age:17},
    {name:'Raja', age:16},
    {name:'Mohan', age:18},
    {name:'Bhanu', age:30}
];

let adult = [];

// let adultObj = people.filter(person=>person.age>=18);
// adultObj.forEach(adulelem=>adult.push(adulelem.name));

people.filter(person=>person.age>=18).forEach(adulelem=>adult.push(adulelem.name));


console.log(people);
console.log(adult);
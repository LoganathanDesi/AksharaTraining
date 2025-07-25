let a=['Apple','Mango','Grapes'];
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
console.log('---');
//for each loop
for(let element of a) //of is for printing elements
{
  console.log(element);
}
console.log('---');
for(let index in a) //in is for printing index of array or Key of map or object
{
  console.log(index);
}
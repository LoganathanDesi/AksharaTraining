function add(a)
{
    console.log(a);
    for(let i of arguments)
    {
        console.log(i);
    }
}

add(); //a is undefined, argument is emtpy
console.log('---');
add(10); // a is 10, arguments[0] is 10
console.log('---');
add(10,20); // a is 10, arguments[0] is 10 and a[1] is 20
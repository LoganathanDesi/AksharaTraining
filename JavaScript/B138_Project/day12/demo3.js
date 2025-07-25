function add()
{
    console.log('add function');
    for(let i of arguments) //default java script stores it
    {
        console.log(i);
    }
}

add();
console.log('---');
add(10);
console.log('---');
add(10,20,30);
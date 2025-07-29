function greet()
{
    console.log('Hi');
}

function test(a)//if a function accept another function as arg , and calls --> call back function
{
    a();
}

let hi=greet;
greet();
hi();

test(hi);
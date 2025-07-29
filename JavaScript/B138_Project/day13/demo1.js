function greet()
{
    console.log('Hi');
}

function test(a)
{
    console.log(typeof a);
}


//we can store function name into a varibale
let b=greet;

test();
test(10);
test('bhanu');
test(b);//we can sent a funciton as input arg to another function

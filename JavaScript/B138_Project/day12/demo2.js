function add(a,b)
{
    console.log(a);//10
    console.log(b);//undefined
}

add(10,20);
add(10,20,30);//any additional input will be ignored
add(10);//less arg , undefined
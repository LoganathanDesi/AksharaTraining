function add(a=1,b=5)
{
    console.log(a);
    console.log(b);
}


add();//1 5
add(10);//10 5
add(10,20);//10 20
//we cant skip a and send data to b

let a;
add(a,6); //1 and 6
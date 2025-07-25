function add(a,b,c,d,e)
{
    console.log(a+b+c+d+e);
}

add(1,2,3,4,5);

let data=[10,20,30,40,50];
x=data[0];
y=data[1];
z=data[2];
p=data[3];
q=data[4];
add(x,y,z,p,q);

add(data[0],data[1],data[2],data[3],data[4]);

add(...data);//spread--extract every value present in array and send it as argument
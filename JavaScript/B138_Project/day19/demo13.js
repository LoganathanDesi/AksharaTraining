// let msg="ha ha";

// let a=msg.indexOf("ha");
// console.log(a);//0

// let b=msg.indexOf("ha",a+1);
// console.log(b);//3

// let c=msg.indexOf("ha",b+1);
// console.log(c);


msg="ha hye ha ha he he ha he ha";
let index=-1;
while(true)
{
    index=msg.indexOf("ha",index+1);
    
    if(index==-1)
    {
        break;
    }
    console.log(index);
}
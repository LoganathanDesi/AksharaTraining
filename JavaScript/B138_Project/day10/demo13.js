//print the given number in reverse order
let num=1052;
let lastDigit;
let msg="";

while(num>0)
{
    lastDigit=num%10;
    msg=msg+lastDigit;
    num=Math.floor(num/10);
}

console.log(msg);
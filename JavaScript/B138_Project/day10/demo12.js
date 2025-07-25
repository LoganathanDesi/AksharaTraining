let num=345;
let lastDigit=0;
let strlastDigit="";

while(num>0)
{
    lastDigit=num%10;
    console.log(lastDigit);
    strlastDigit = strlastDigit + lastDigit;

    num=Math.floor(num/10);
}

console.log(strlastDigit);
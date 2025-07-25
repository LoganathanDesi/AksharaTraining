//count the digit present in number
let num=567781;
let count=0;
while(num>0)
{
    num=parseInt(num/10);
    count++;
}

console.log(count);
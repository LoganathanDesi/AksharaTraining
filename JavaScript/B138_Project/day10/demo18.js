let number=8;

// console.log(number%2);
// console.log(number%3);
// console.log(number%4);
// console.log(number%5);
// console.log(number%6);
let msg="prime number";

for(let i=2;i<number;i++)
{
    if(number%i==0)
    {
        msg="Not a prime number";
    }
}

console.log(msg);
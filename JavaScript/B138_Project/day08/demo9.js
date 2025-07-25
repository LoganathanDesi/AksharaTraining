//print the sum of natural numbers
// any number from 1 ... 1,2,3,4 .... are natural numbers
// -1, -2, -3 ... are not natural number

let number = 10;
let sum = 0;
for (let i=1; i<=number;i++)
{
    sum = sum+i;
}

//console.log(sum,"is the sum of the natural number ",number)
console.log("Sum of", number ,"natural number is",sum)
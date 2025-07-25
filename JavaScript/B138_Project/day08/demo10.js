//write a code to print factorial of a given number: 3 --> 3x2x1

let number = 3;
let factorial = 1;

// for (let i=1; i<=number;i++)
// {
//     factorial = factorial*i;
// }


for(let i=number; i>=1;i--)
{
    //factorial = factorial*i;
    factorial *= i;
}


console.log("Factorial of the number",number,"is:",factorial)
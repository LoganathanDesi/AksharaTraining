//print factorial of a number--> 4--> 1*2*3*4--> using while loop
let num=4;
let fact=1;
let i=1;

while(i<=num)
{
    fact*=i;
    i++;
}

console.log(fact);
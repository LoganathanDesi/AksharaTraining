//function factorial

function find_factorial(num){
    let fact=1;

    for (let i=1;i<=num;i++)
    {
        fact = fact*i;
    }

    return fact
}

let res;
let num;
num = 5;
res = find_factorial(num);
console.log('factorial of',num,"is",res);

num = 7;
res = find_factorial(num);
console.log('factorial of',num,"is",res);
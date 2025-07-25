//create a function which accepts 2 numbers and returns sum(+) and product(*)
function sumAndProduct(a,b)
{
    let sum=a+b;
    let product=a*b;
    let result=[sum,product];
    return result;
}

let res=sumAndProduct(1,2);
console.log('sum is',res[0],' product is',res[1]);
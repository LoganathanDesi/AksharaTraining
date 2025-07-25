//call add get the sum , send that sum to double function
function add(a,b)
{
    let res=a+b;
    console.log('sum is',res);

    return res;
}

function double(n)
{
    let res=n+n;
    console.log('double is',res);
    return res;//exit the function
    return res+1;//this is unreachable code
}

let x=add(1,2);//3
let y=double(x);//6
console.log(y);
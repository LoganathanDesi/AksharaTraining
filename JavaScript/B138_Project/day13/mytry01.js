function recfunc1(n){
    if (n>=0){
        console.log(n);
        recfunc1(n-1);
    }

}
recfunc1(3);

console.log("---------")

function recSumfunc2(n){
    if (n<=0){
        return 0;
    }else
    {
        
        let sum = n+recSumfunc2(n-1);
        return sum
    }

}
console.log(recSumfunc2(2));

console.log("---------")
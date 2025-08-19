//Write a  program to calculate the sum of first n natural numbers.
let n = 10;
let sum=0;
if (n>0){
    for (let i=1; i<=n; i++){
        sum = sum+i;
    }
    console.log("Sum:",sum)
}else{
    console.log(n,"is not a natural number");
}
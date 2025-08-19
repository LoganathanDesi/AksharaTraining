//Write a  program to print all numbers between 1 and 100 that are divisible by both 3 and 5.

// for (let i = 1; i<=100;i++){
//     if (i%3 == 0 && i%5 == 0){
//         console.log(i);
//     }
// }



//Write a  program to find the sum of all even numbers between 1 and n.
// let n=30;
// let sum=0;

// if(n>1){
// for (let i=2;i<=n;i++){
// if (i%2==0){sum=sum+i;}
// }
// }else{
//     console.log(n,'must be greater than 1');
// }

// console.log("Sum of even numbers:", sum)



//Write a  program to calculate the sum of squares of the first n natural numbers.

// let n = 5;
// let sum = 0;

// for (let i=1;i<=n;i++){
//     sum = sum + (i*i);
// }

// console.log(sum);

//Write a  program to find the greatest of three numbers.

// let a = 10;
// let b = 40;
// let c = 30;

// if (a>b && a>c){
//     console.log("a is the greatest");
// } else if (b>a && b>c){
//     console.log("b is the greatest");
// } else {
//     console.log("c is the greatest");
// }

//Write a  program to check if a number is a palindrome.
// let n = 121;
// let revn = n.toString().split('').reverse().join('');
// if(n==revn){
//     console.log(n,"is a palindrome");
// }else{
//     console.log(n,"is NOT a palindrome");
// }

//Write a  program to calculate the factorial of a number.

// let n = 5;
// let sum = 0;

// function fact(n){
//     if (n>0){
//         sum = n*fact(n-1);
//         return sum;
//     }else{
//         return 1;
//     }

    
// }

// console.log(fact(n));

// Write a  program to find the sum of all numbers divisible by 3 or 5 up to n.
// let n = 10;
// let sum=0;
// for (let i = 1; i<=n;i++){
//    if (i%3 == 0 || i%5 == 0){
//        sum = sum+i;
//    }
// }
// console.log(sum);

//Write a  program to check if a year is a leap year.
// let year = 2028;
// if(year%4==0){
//     console.log(year,"is a leap year");
// }else{
//     console.log(year,"is not a leap year");
// }

//Write a  program to check if a number is prime or not.
// let n=7;
// let count=1;

// for (let i=2;i<=n;i++){
//     if (n%i == 0){
//         count++
//         if (count>2){break;}
//     }
// }

// if (count>2){
//     console.log(n,"is not a prime number");
// }else{
//     console.log(n,"is a prime number");
// }

// //Write a  program to find all prime numbers between 1 and n.

// let n = 20

// for (let i=1; i<=n; i++){
//     let count = 0;
//     for (let j=1; j<=i; j++)
//     {
        
//         if (i%j == 0){
//             count++;
//             if (count>2){break}
//         }
//     }
//     if (count==2){
//         console.log(i)
//     }

// }

//Write a  program to print the Fibonacci series up to n terms.
// let n = 5;

// let a = 0, b = 1;

// console.log(a); // First term
// if (n > 1) console.log(b); // Second term

// for (let i = 3; i <= n; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;
// }


// //Write a  program to check if a number is an Armstrong number.
// let n = 1634;
// let digits = n.toString().length;

// let nArr = n.toString().split('');

// let sum = 0;
// for (let e of nArr){
//     sum = sum + e ** digits;
// }

// if (n==sum){
//     console.log(n,"is an Armstrong number");
// }else{
//     console.log(n,"is not an Armstrong number");
// }

// //Write a  program to check if a number is perfect.

// let n=28;
// let sum=0;
// for (let i=1;i<n;i++){
//     if (n%i == 0){
//         sum = sum+i;
//         if (sum>n) { break }
//     }
// }
// if (n==sum){
//     console.log(n,"is a perfect number");
// }else{
//     console.log(n,"is not a perfect number");
// }

// Write a  program to check if two numbers are co-prime
let a = 17;
let b = 35;

let aCD = [];
let bCD = [];

for (let i=1;i<=a;i++){
    if (a%i == 0){
        aCD.push(i);
    }
}

for (let i=1;i<=b;i++){
    if (b%i == 0){
        bCD.push(i);
    }
}

let commonCD = [];
for (let eA of aCD)
    for (let eB of bCD){
        if (eA==eB){
            commonCD.push(eA)
        }
}

commonCD.sort((a,b)=>a-b).reverse();

console.log("GCD is",commonCD[0])

if (commonCD[0]==1){
    console.log(`${a} and ${b} are co-prime numbers`);
}else{
     console.log(`${a} and ${b} are NOT co-prime numbers`);
}
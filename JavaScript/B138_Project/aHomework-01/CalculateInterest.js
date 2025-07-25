//Q9.	Write a program to calculate the simple interest.
let principal = 6000;
let rate = 6;
let time = 5;
let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest:", simpleInterest);


//Q10.	Write a program to calculate the compound interest.
principal = 6000;
rate = 6;
time = 5;
let compoundInterest = principal * ((1 + rate / 100)**time) - principal;
console.log("Compound Interest:", compoundInterest);
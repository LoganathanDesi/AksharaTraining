let gender = 'female'
let age = 20;

const malemarriageage=21;
const femalemarriageage=18;


if (!((gender.toLowerCase() === 'male') || (gender.toLowerCase() === 'female')))
{

    console.log("Pls enter the gender as male or female");
}else{
if ((gender.toLowerCase() === 'male' && age >=malemarriageage) || (gender.toLowerCase() === 'female' && age >=femalemarriageage))
{
    console.log(gender, "age", age, "is eligible for marriage");
}
else
{
    console.log(gender, "age", age, "is NOT eligible for marriage");
}}
// nested conditons
//age restriction for marriage
console.log('Start');
let gender='M'; //F-> Female and M-> Male
let age = 20;

if (gender=='F')
{
    if(age >=18)
    {
        console.log('Madam, you are eligible for Marriage');
    }
    else
    {
        console.log('Madam, you are not eligible for Marriage');    
    }
}
else
{
    if(age >=21)
    {
        console.log('Sir, you are eligible for Marriage');
    }
    else
    {
        console.log('Sir, you are not eligible for Marriage');    
    }
}


console.log('End');
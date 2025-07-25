for(let number=1;number<=10;number++)
{
    if(number%2==0)
    {
        console.log(number,'even');
    }
    else
    {
        console.log(number,'odd');
    }
}
console.log("----------------------");
//----------------------
for(let number=1;number<=10;number++)
{
    let msg = (number%2==0)?"even":"odd";

        console.log(number,msg);

}
//----------------------
console.log("----------------------");
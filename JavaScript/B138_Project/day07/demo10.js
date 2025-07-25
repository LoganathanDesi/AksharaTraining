//J F M Q1  A M J Q2   J A S Q3  O N D Q4
let month=3;

if(month==1||month==2||month==3)
{
    console.log("Q1");
}
else if(month>=4 && month<=6)
{
  console.log("Q2");
}
else if(month>=7 && month<=9)
{
  console.log("Q3");
}
else if(month>=10 && month<=12)
{
  console.log("Q4");
}
else
{
    console.log("invalid input");
}
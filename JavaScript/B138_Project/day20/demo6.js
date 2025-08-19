let s1="Dad";
s1 = s1.toLowerCase();

let reverse="";
for(let i=s1.length-1;i>=0;i--)
{
    reverse=reverse+s1.charAt(i);
}
console.log('String is',s1);
console.log('Its reverse is',reverse);

if(s1==reverse)
{
    console.log("Yes it is palindrome");
}
else
{
        console.log("No it is NOT a palindrome");
}
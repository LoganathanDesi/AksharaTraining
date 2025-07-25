let vowels = ['a','e','i','o','u'];
let char = 'i';
let lchar = char.toLowerCase();
let vowelflag = false

for (let elem of vowels)
{
    if (elem === lchar)
    {
        vowelflag = true;
        break;
    }
}

if (vowelflag)
{
    console.log(char,"is a vowel");
}
else
{
    console.log(char,"is NOT a vowel");
}
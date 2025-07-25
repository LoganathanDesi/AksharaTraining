// Program 1: Positive or Negative
console.log("Program 1: Positive or Negative - START");
let num1 = 3;
if (num1 > 0) 
{
    console.log(num1, "is Positive");
} 
else if (num1 < 0) 
{
    console.log(num1, "is Negative");
} 
else 
{
    console.log(num1, "is Zero");
}
console.log("Program 1: Positive or Negative - END");
console.log("--------------------------------------------------");

// Program 2: Odd or Even
console.log("Program 2: Odd or Even - START");
let num2 = 4;
if (num2 % 2 === 0) 
{
    console.log(num2, "is Even");
} else 
{
    console.log(num2, "is Odd");
}
console.log("Program 2: Odd or Even - END");
console.log("--------------------------------------------------");

// Program 3: Uppercase or Lowercase
console.log("Program 3: Uppercase or Lowercase - START");
let char1 = 'G';
if (char1 >= 'A' && char1 <= 'Z') 
{
    console.log(char1, "is Uppercase");
} 
else if (char1 >= 'a' && char1 <= 'z') 
{
    console.log(char1, "is Lowercase");
} 
else 
{
    console.log(char1, "is not a valid alphabet");
}
console.log("Program 3: Uppercase or Lowercase - END");
console.log("--------------------------------------------------");

// Program 4: Lowercase to Uppercase
console.log("Program 4: Lowercase to Uppercase - START");
let char2 = 'm';
if (char2 >= 'a' && char2 <= 'z') 
{
    let upperChar = char2.toUpperCase();
    console.log("Uppercase of", char2, "is", upperChar);
} 
else 
{
    console.log(char2, "is not a lowercase letter");
}
console.log("Program 4: Lowercase to Uppercase - END");
console.log("--------------------------------------------------");

// Program 5: Vowel Check
console.log("Program 5: Vowel Check - START");

let char3 = 'e';
let lowerChar = char3.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
let isVowel = false;

for (let i = 0; i < vowels.length; i++) 
{
    if (lowerChar === vowels[i]) 
    {
        isVowel = true;
        break;
    }
}

if (isVowel) 
{
    console.log(char3, "is a vowel");
} else 
{
    console.log(char3, "is not a vowel");
}

console.log("Program 5: Vowel Check - END");
console.log("--------------------------------------------------");

// Program 6: Can Cast Vote
console.log("Program 6: Can Cast Vote - START");
let age1 = 20;
if (age1 >= 18) 
{
    console.log("Age", age1, ": Eligible to vote");
} else 
{
    console.log("Age", age1, ": Not eligible to vote");
}
console.log("Program 6: Can Cast Vote - END");
console.log("--------------------------------------------------");

// Program 7: Can Donate Blood
console.log("Program 7: Can Donate Blood - START");
let age2 = 22;
let weight = 52;
if (age2 >= 18 && weight >= 50) 
{
    console.log("Age", age2, "and Weight", weight, ": Eligible to donate blood");
} else 
{
    console.log("Age", age2, "and Weight", weight, ": Not eligible to donate blood");
}
console.log("Program 7: Can Donate Blood - END");
console.log("--------------------------------------------------");

// Program 8: Eligible for Marriage
console.log("Program 8: Eligible for Marriage - START");
let gender = 'male';
let age3 = 23;
if ((gender === 'male' && age3 >= 21) || (gender === 'female' && age3 >= 18)) 
{
    console.log(gender, "aged", age3, "is eligible for marriage");
} else 
{
    console.log(gender, "aged", age3, "is not eligible for marriage");
}
console.log("Program 8: Eligible for Marriage - END");
console.log("--------------------------------------------------");

// Program 9: Eligible for Discount
console.log("Program 9: Eligible for Discount - START");
let age4 = 65;
if (age4 < 12 || age4 > 60) 
{
    console.log("Age", age4, ": Eligible for discount");
} else 
{
    console.log("Age", age4, ": Not eligible for discount");
}
console.log("Program 9: Eligible for Discount - END");
console.log("--------------------------------------------------");
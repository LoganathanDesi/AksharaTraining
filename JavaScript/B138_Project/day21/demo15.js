let fruits=['grapes','apple','Orange','banana','chiku','Mango'];
console.log(fruits);
fruits.sort();//Case Sensitive A-Z first and then a-z 
console.log(fruits);

fruits.sort((s1,s2)=>s1.localeCompare(s2));
console.log(fruits);

//reverse sort
fruits.sort((s1,s2)=>s2.localeCompare(s1));
console.log(fruits);


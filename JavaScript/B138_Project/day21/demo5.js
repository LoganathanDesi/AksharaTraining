let fruits1=['grapes','apple','orange'];
let fruits2=['banana','chiku','mango'];
let fruits3=[];
for(let f of fruits2){
   fruits3.push(f);
}

console.log(fruits3);

fruits1=['grapes','apple','orange'];
fruits2=['banana','chiku','mango'];

fruits3=fruits1.concat(fruits2);
console.log(fruits3);

let fruits4 = (fruits1 + ',' + fruits2).split(','); //[ 'grapes', 'apple', 'orangebanana', 'chiku', 'mango' ]

console.log(fruits4);
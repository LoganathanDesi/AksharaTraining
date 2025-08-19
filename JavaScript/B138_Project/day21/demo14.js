let numebrs=[4,1,8,2,10,23];
console.log(numebrs);//[4,1,8,2,10,23]
numebrs.sort();//consider all elements as string 
console.log(numebrs);//[1,10,2,23,4,8]

numebrs.sort((a,b)=>a-b);
console.log(numebrs);

numebrs.sort((a,b)=>a-b).reverse();
console.log(numebrs);

numebrs.sort((a,b)=>b-a);
console.log(numebrs);
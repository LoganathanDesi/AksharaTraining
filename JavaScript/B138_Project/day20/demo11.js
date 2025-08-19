let a=[10,20];
console.log(a);//[ 10, 20 ]
console.log(a.length);//2

a[3]=40;
console.log(a);//[ 10, 20, <1 empty item>, 40 ]
console.log(a.length);//4

a.length=6;
console.log(a);//[ 10, 20, <1 empty item>, 40, <2 empty items> ]
console.log(a.length);



a.length=3;
console.log(a);//[ 10, 20, <1 empty item> ]
console.log(a.length); //3
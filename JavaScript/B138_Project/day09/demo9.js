let a=[10,20,30];
console.log(a);//10 20 30
a[0]=11;//write to array
console.log(a);//11 20 30

a=[10,20,30];
for(let i=0;i<a.length;i++)
{
    a[i]=a[i]+1;  //using for i loop we can modifiy /write array elements
}
console.log(a);//11 21 31
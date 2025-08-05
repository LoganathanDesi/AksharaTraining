let user={
    address:{
        city:'Bengaluru'
    }
}

console.log(user.address.city);//Bengaluru
console.log(user.address.state);//undefined
console.log(user.address.state??"karnataka");

console.log(user.contact?.email??"bhanu@gmail.com");

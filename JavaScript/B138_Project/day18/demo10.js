let user={
    address:{
        city:'Bengaluru'
    }
}

console.log(user.address.city);//Bengaluru
console.log(user.address.state);//undefined
console.log(user.address.state??"karnataka"); //nullish operator retruns the value specified if the left side is null or undefined
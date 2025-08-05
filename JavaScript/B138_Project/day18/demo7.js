let emp={
    name:'Bhanu'
}


console.log(emp.name);//Bhanu
console.log(emp.city);//undefined

let user={
    address:{
        city:'Bengaluru'
    }
}

console.log(user.address.city);//Bengaluru
console.log(user.address.pin);//undefined
console.log(user.contact.email);//we get error 
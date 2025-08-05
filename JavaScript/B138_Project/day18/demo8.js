let user={
    address:{
        city:'Bengaluru'
    }
}
console.log(user.address.city);//Bengaluru
console.log(user.address?.city);//Bengaluru

console.log(user.address.pin);//undefined
console.log(user.address?.pin);//undefined

//console.log(user.contact.email);//we get error 
// optional chaining
console.log(user.contact?.email); //it will work
console.log(user?.contact?.email); //it will also work
console.log(test?.test1) //object test has to be defined
let animals=['cow','cat','dog'];
console.log(animals);//['cow','cat','dog']

animals.push('lion'); // add at the end
console.log(animals);//[ 'cow', 'cat', 'dog', 'lion' ]

animals.unshift('goat');// add at the start
console.log(animals);//[ 'goat', 'cow', 'cat', 'dog', 'lion' ]

animals.splice(2,0,"tiger");//add at specified location
console.log(animals); //[ 'goat', 'cow', 'tiger', 'cat', 'dog', 'lion' ]


animals.splice(2,1,"big tiger");//repalce
console.log(animals); //[ 'goat', 'cow', 'big tiger', 'cat', 'dog', 'lion' ]


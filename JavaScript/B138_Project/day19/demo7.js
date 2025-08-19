let msg="The quick brown fox jumps over the lazy dog";

console.log(msg.startsWith('The'));//true
console.log(msg.startsWith('This'));//false

console.log(msg.endsWith("dog"));//true
console.log(msg.endsWith("Dog"));//false
console.log(msg.endsWith("lazy"));//false


console.log(msg.includes("fox"));
console.log(msg.includes("The"));
console.log(msg.includes("dog"));

console.log(msg.includes("cat"));
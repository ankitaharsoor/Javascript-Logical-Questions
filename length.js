// JS program to get length of strings

let sentence = "";
let len = sentence.length;
console.log(len); // 0

sentence = "I love Program.";
len = sentence.length;
console.log(len); 

// no effect if try to assign value to length
sentence.length = 5;
console.log(sentence); 
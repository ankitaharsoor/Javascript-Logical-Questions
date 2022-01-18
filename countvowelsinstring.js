// 29 program to count the number of vowels in a string
const string = prompt('Enter a string: ');
function countVowel(str) { 
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
const result = countVowel(string);
console.log(result);
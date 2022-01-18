// 3rd area of triangle
const base = prompt('Enter the base of a triangle: ');
const height = prompt('Enter the height of a triangle: ');
const area = (base * height) / 2;
console.log(area);

// 4 when traingles sides are known 
// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));
const s = (side1 + side2 + side3) / 2;
const area = Math.sqrt(  s * (s - side1) * (s - side2) * (s - side3));
console.log(area);

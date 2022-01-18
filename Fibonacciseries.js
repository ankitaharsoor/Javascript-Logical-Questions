let number = prompt("enter a number")
let n1=0, n2=1,nextnum;

console.log("fibonacci series")

for(let i=1;i<=number , i++ ;){
    console.log(n1);
    nextnum=n1+n2;
    n1=n2;
    n2=nextnum;
}
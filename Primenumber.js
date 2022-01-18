let num = prompt("enter a number")
let isPrime = true;
if (num ===1){
    console.log("1 is neither prime nor composite number");
}
else if (num > 1){
    for (let i=2;i < num; i++){
        if(num % i == 0){
            isPrime = false;
        }
    }
    if (isPrime){
        console.log(`${num} is prime`);
    }
    else{
        console.log(`${num} is not a prime`);
    }
}
else {
    console.log("the number is not a prime");
}

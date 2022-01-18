let num = prompt('enter a number');
if (num < 0){
    console.log('no factorial for negative numbers');
}
else if (num === 0) {
    console.log("factorial of zero is 1");
}
else {
    let fact = 1;
    for ( i = 1 ; i <= num ; i++) {
            fact *= i};
    console.log(`factorial of ${num} is ${fact}`);
    }


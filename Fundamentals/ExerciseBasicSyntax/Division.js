function checkIfDivaidable(num) {

    if(num % 10 === 0) {
        console.log("The number is divisible by 10");
    } else if(num % 7 === 0) {
        console.log("The number is divisible by 7");
    } else if(num % 6 === 0) {
        console.log("The number is divisible by 6");
    } else if(num % 3 === 0) {
        console.log("The number is divisible by 3");
    } else if(num % 2 === 0) {
        console.log("The number is divisible by 2");
    } else {
        console.log("Not divisible");
    }
}

checkIfDivaidable(30);
checkIfDivaidable(15);
checkIfDivaidable(12);
checkIfDivaidable(1643);
function getTheSum(numberCount) {

    let number = 1;
    let count = 1;
    let sum = 0;

    while(count <= numberCount) {

        if(number % 2 !== 0) {
            console.log(number);
            sum += number;
            count++;
        }
        number++;
    }

    console.log("Sum: " + sum)
}

getTheSum(5);
function printAndSumNumbers(from, to) {

    let sum = 0;
    let stringToPrint = '';

    for(let num = from; num <= to; num++) {

        sum += num;
        stringToPrint += num;
        stringToPrint += " ";
    }
    console.log(stringToPrint.trim());
    console.log("Sum: " + sum)
}

printAndSumNumbers(5, 10);
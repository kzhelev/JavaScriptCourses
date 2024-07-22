function amazingNumbers(input) {

    let sum = 0;
    let inputAsString = String(input);
    let inputLength = inputAsString.length;

    for(let num = 0; num < inputLength; num++) {

        sum += Number(inputAsString[num]);
    }

    let sumAsString = String(sum);
    let sumLength = sumAsString.length;

    let isMagicNum = "False";

    for(let num = 0; num < sumLength; num++) {

        if(sumAsString[num] === "9") {
            isMagicNum = "True";
            break;
        }
    }

    console.log(`${input} Amazing? ${isMagicNum}`);
}

amazingNumbers(1233);
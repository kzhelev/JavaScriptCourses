    function integerAndFloat(numOne, numTwo, numThree) {

        let sum = numOne + numTwo + numThree;
        let isInt = Number.isInteger(sum);
        let sumType = isInt ? "Integer" : "Float";

        console.log(`${sum} - ${sumType}`);
    }

integerAndFloat(9, 100, 1.1);
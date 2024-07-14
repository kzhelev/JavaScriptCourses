function round(flNum,fixedTo) {

    if(fixedTo > 15) {
        fixedTo = 15;
    }

    let numberToBeRounded = parseFloat(flNum);
    let roundeNum = numberToBeRounded.toFixed(fixedTo);

    console.log(parseFloat(roundeNum));
}

round(10.5,3);
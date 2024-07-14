function buildTriangle(lavels) {

    for(let floor = 1; floor <= lavels; floor++) {

        let floorToBePrinted = '';

        for(let flElements = 1; flElements <= floor; flElements++){
            floorToBePrinted += floor + " ";
        }

        console.log(floorToBePrinted.trim());
    }
}

buildTriangle(7);
function login(input) {

    let userName = input[0];
    
    let inputLength = input.length;
    let unsuccessfullAttemptsCount = 0;

    for(let num = 1; num < inputLength; num++) {

        if(userName === input[num].split("").reverse().join("")) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            unsuccessfullAttemptsCount++;
            if(unsuccessfullAttemptsCount === 4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);
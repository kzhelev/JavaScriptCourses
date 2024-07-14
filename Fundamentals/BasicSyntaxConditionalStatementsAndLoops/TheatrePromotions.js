function getTicketPrice(dayType, age) {

    if(age < 0 || age > 122) {
        console.log("Error!");
    } else {

        switch(dayType) {
            case "Weekday":

                if(0 <= age && age <= 18) {
                    console.log("12$");
                } else if (18 < age && age  <= 64) {
                    console.log("18$");
                } else if (64 < age && age  <= 122) {
                    console.log("12$");
                }

                break;
            case "Weekend":

                if(0 <= age && age <= 18) {
                    console.log("15$");
                } else if (18 < age && age  <= 64) {
                    console.log("20$");
                } else if (64 < age && age  <= 122) {
                    console.log("15$");
                }

                break;
            case "Holiday":

                if(0 <= age && age  <= 18) {
                    console.log("5$");
                } else if (18 < age && age  <= 64) {
                    console.log("12$");
                } else if (64 < age && age  <= 122) {
                    console.log("10$");
                }

                break;
        }
    }
}

getTicketPrice('Weekday', 42);
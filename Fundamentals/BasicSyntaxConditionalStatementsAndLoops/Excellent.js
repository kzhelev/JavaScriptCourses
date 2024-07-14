function checkGrade(grade) {

    let gradeToBeChecked = parseFloat(grade);
    let isExcellent = gradeToBeChecked >= 5.5 ? "Excellent" : "Not excellent";

    console.log(isExcellent);
}

checkGrade(6);
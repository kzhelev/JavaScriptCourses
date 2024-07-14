function printStudentInfo(name, age, avgGrade) {

    let studentName = name;
    let studentAge = Number(age);
    let studentAvgGrade = parseFloat(avgGrade).toFixed(2);

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentAvgGrade}`);
}

printStudentInfo('John', 15, 5.54678);
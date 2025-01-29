let empName;
console.log("Welcome to JavaScript");
//Arrow function is declared without function keyword and add => and it has
//been assigned to a variable and that variable will be called to
//execute the function
let aFunction = () => {
    let empID = "ID001";
    empName = "Parameswaran.s";
    empStatus = "Valid";
    if (empStatus == "Valid") {
        console.log("Inside IF Statement Block");
        let empAge = "34";
        console.log("Employee Name is: ", empName);
        console.log("Employee ID is: ", empID);
        console.log("Employee Age is: ", empAge);
    }
    else {
        console.log("If Block not executed");
        //console.log("Employee Name is :",empName);
    }

    //console.log("Employee Age is: ", empAge);
    

}

aFunction();

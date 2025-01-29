let empName;
console.log("Welcome to JavaScript");
//IIFE Immediate invoked function is declared without function name and it has
//been assigned to a variable and that variable will be called to
//execute the function

(function () {
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

})

();

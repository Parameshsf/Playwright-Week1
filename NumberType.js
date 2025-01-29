
console.log("Find the number types like postive or negative or neutral using conditional statement");

let numberType = (num) => {

    if (num > 0) {
        console.log("Number " + num + " is positive");
    }
    else if (num < 0) {
        console.log("Number " + num + " is negative");
    }
    else if (num === 0) {
        console.log("Number " + num + " is neutral");
    }
    else {
        console.log("Invalid entry");
    }


}

numberType(-5);

console.log("Find the number types like postive or negative or neutral using conditional statement");

let numberType = (num) => {

    switch(true){
        case (num > 0):
            console.log("Number "+num+" is positive")
            break;
        case (num < 0):
            console.log("Number "+num+" is negative")
            break;
        case (num === 0):
            console.log("Number "+num+" is neutral")
            break;
        default:
            console.log("Invalid entry");
            break;
    }

}

numberType(-10);
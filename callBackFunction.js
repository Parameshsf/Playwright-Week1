function addNum(num1,num2,multiply){
    let a = num1;
    let b = num2;
    console.log("Addition of two numbers :",a+b);
    multiply();//call the function passed as a callback function
}

function multiplyFunction(){
    let a = 5;
    let b = 5;
    console.log("Multiply of 2 numbers are :",a*b);
}

addNum(10,20,multiplyFunction);
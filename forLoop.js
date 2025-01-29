console.log("Print odd numbers values from 1 to 25:")

let oddNum = [];

function printOddNumber() {
    for (let i = 0; i <= 25; i++) {
        if (i % 2 !== 0) {
            oddNum.push(i);
            console.log("The odd number is :", i);

        }
    }
    console.log("The odd numbers are :", oddNum);
}

printOddNumber();


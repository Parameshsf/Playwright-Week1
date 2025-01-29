
console.log("Find the student grade based on the score using switch statement");
let grade;

let gradeType = (score) => {

    switch(true){
        case (score >= 60 && score <= 70):
            grade = 'Average';
            console.log("Student grade is ",grade);
            break;
        case (score > 70 && score <=80):
            grade = 'First Class';
            console.log("Student grade is ",grade);
            break;
        case (score > 80):
            grade = 'Distinction';
            console.log("Student grade is ",grade);
            break;
        case (score >=35 && score < 60):
            grade = 'Pass'
            console.log("Student grade is ",grade);
            break;
        case (score < 35):
            grade = 'Fail'
            console.log("Student grade is ",grade);
            break;
        default:
            console.log("Invalid entry");
            break;
    }

}

gradeType(80);
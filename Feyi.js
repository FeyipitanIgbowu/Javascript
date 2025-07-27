function getScore() {
 let score =  document.getElementById("score").value
	score = Number(score);
	if (score <= 100 && score > 0) {
		return score;
	} else {
		console.log("Enter your score");
		return getScore();
	}
}


function calculateGrade(score) {
	let grade;
	if (score == 90) {	
		grade = "A";
	} else if (score >= 80 && score <= 99) {
		grade = "B";
	} else if (score >= 60 && score <= 79) {
		grade = "C";
	} else if (score >= 40 && score <= 59) {
		grade = "D";
	} else if (score >= 20 && score <= 39) {
		grade = "E";
	} else {
		grade = "F"
	}
	console.log("Your grade is : ", grade);
	return grade;
}

function getFeedback(grade) {
	switch (grade) {
            case "A" : console.log("Excellent performance."); break;
            case "B" : console.log("Good job, Keep improving."); break;
            case "C" : console.log("Fair effort, keep working on it."); break;
            case "D" : console.log("You can do better, don't give up."); break;
            case "E" : console.log("Needs Improvement, Ask for help."); break;
            default :  console.log("Poor result"); break;
        }
       }


function main() {
	let score = getScore();
	let grade = calculateGrade(score);
	let feedback = getFeedback(grade);
}

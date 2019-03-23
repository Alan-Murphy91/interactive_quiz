const questions = [{
	question_string: "Where would you find the empire state building?",
	choices: {
	  correct: "New York",
	  options: ["New York", "Los Angeles", "San Francisco", "New Orleans"]
	},
	feedback: {
		correct: "That's right",
		incorrect: "That's not right"
	},
	type: "single"
  }, 
  {
	question_string: "Identify the components of a PC?",
	choices: {
	  correct: ["Processor", "Memory", "Hard Disk", "CD-ROM Drive"],
	  options: ["Processor", "Memory", "Hard Disk", "CD-ROM Drive", "Printer"],
	},
	feedback: {
		correct: "That's right.",
		incorrect: "That's not it."
	},
	type: "multi"
  }, 
  {
	question_string: "_ is a character in the film 'The Matrix'?",
	choices: {
	  correct: "Neo",
	  options: ["R2D2", "Neo", "Ripley"]
	},
	feedback: {
		correct: "That's right.",
		partlyCorrect: "Your partly right.",
		incorrect: "Your partly right."
	},
	type: "singlefill"
  }, 
];

let score = 0;
let q1Answered = false;
let q2Answered = false;
let q3Answered = false;
let alreadyAnswered = '- but you dont get a score!';
let question = document.getElementById('question');
let answer = document.getElementById('answer');
let warning = document.getElementById('warning');
let warningText = 'Pick an answer before moving to the next question!';

let questionCurrent = 0;
let answerCurrent = [];

//initial
question.innerHTML = questions[questionCurrent].question_string;
questions[questionCurrent].choices.options.forEach(el => {
	answer.innerHTML += `<button id=${el} onclick='answerOption("${el}")'>${el}</button>`;
});


function nextQuestion() {
	if(answerCurrent !== []) {
		confirmAnswer();
		if(0 >= questionCurrent < 3) {
			if(warning.innerHTML !== "") {
				warning.innerHTML = "";
			}
			questionCurrent += 1;
			console.log(questionCurrent);
			question.innerHTML = questions[questionCurrent].question_string;
			questions[questionCurrent].choices.options.forEach(el => {
				answer.innerHTML += `<button id=${el} onclick='answerOption("${el}")'>${el}</button>`;
			});
			document.getElementById('answer').innerHTML = questions[questionCurrent].question_string;
			answerCurrent = [];
		} else {
	
		}
	} else {
		warning.innerHTML = warningText;
	}

}

function answerOption(el) {
	warning.innerHTML = '';
	switch(questions[questionCurrent].type) {
		case 'single':
			if(!answerCurrent.includes(el) && answerCurrent.length === 0) {
				answerCurrent.push(el);
				document.getElementById(el).style.background = 'blue';
				document.getElementById(el).style.color = 'white';
			} 
			else if(answerCurrent.includes(el)) {
				let index = answerCurrent.indexOf(el);
				answerCurrent.splice(index, 1);
				document.getElementById(el).style.background = 'buttonface';
				document.getElementById(el).style.color = 'buttontext';
			}
			break;
		case 'multi':

			break;
		case 'singlefill':

			case 'single':

			break;
	};
}

function confirmAnswer() {
	let answers = questions[questionCurrent].choices.options;
	if(answerCurrent === []) {
		warning.innerHTML = warningText;
	} else {
		switch(questions[questionCurrent].type) {
			case 'single':
				if(answers.includes(answerCurrent)) {
					if(q1Answered === false) {
						score += 1;
					}
					warning.innerHTML = questions[questionCurrent].feedback.correct;
					(q1Answered ? warning.innerHTML += alreadyAnswered : '');
				} else {
					warning.innerHTML = questions[questionCurrent].feedback.incorrect;
				}
				break;
			case 'multi':
				let correctAnswersString = answers.sort().join();
				let answersString = answerCurrent.sort.join();
				if(correctAnswersString.indexOf(answersString) !== -1) {
					score += 1;
					warning.innerHTML = questions[questionCurrent].feedback.correct;
				} else {
					warning.innerHTML = questions[questionCurrent].feedback.incorrect;
				}
				break;
			case 'singlefill':
				case 'single':
				if(answers.includes(answerCurrent)) {
					score += 1;
					warning.innerHTML = questions[questionCurrent].feedback.correct;
				} else {
					warning.innerHTML = questions[questionCurrent].feedback.incorrect;
				}
				break;
		};
	}
}
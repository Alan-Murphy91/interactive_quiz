//Mock database

const questions = [{
	question_string: "Where would you find the empire state building?",
	choices: {
	  correct: "New York",
	  options: ["Pink", "Orange", "Green"]
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
	  correct: "Three",
	  options: ["One", "Two", "Four"]
	},
	feedback: {
		correct: "That's right.",
		partlyCorrect: "Your partly right.",
		incorrect: "Your partly right."
	},
	type: "singlefill"
  }, 
];

export default questions;

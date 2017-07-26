var inquirer = require('inquirer');

var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	this.displayClozeCard = function() {
		if (text.search(cloze) < 0) {
			console.log('ERROR: "' + this.cloze + '" does not appear in "' + this.fullText + '."\n');
		}
		

		else {

		console.log("Question: " + this.partial + "\nAnswer: " + this.cloze + "\nFull Text: " + this.fullText + "\n");
		}


	}
};

// var firstCard = new ClozeCard ("George Washington was the first US President.", "George Washington");
// var secondCard = new ClozeCard("Paris is the capital of France","Nice");


// console.log(firstCard.displayClozeCard());
// console.log(secondCard.displayClozeCard());

module.exports = ClozeCard;
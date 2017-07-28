// var inquirer = require('inquirer');

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");

};

// var firstCard = new ClozeCard ("George Washington was the first US President.", "George Washington");

// console.log(firstCard.text + ", " + firstCard.partial);

module.exports = ClozeCard;
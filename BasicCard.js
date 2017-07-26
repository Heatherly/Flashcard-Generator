var inquirer = require('inquirer');

var BasicCard = function (front, back) {
	this.front = front;
	this.back = back;
	this.displayBasicCard = function () {
		console.log("Front: " + this.front + "\nBack: " + this.back + "\n");
	}
};

// var newPresident = new BasicCard ("Who was the first US President? ", "George Washington");



module.exports = BasicCard;
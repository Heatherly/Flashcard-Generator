var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');

var basicCardsArray = [];
var clozeCardsArray = [];
var count  = 1;

BasicCard.prototype.displayInfo = function (x) {
	console.log("BASIC CARD " + x + "\n" +"Front: " + this.front + "\nBack: " + this.back + "\n");
	console.log("---------------\n");
};

ClozeCard.prototype.displayInfo = function(x) {
	// if (text.search(cloze) < 0) {
	// 	console.log('ERROR: "' + this.cloze + '" does not appear in "' + this.text + '."\n');
	// }
	// else {
	console.log("CLOZE CARD " + x + "\nStatement: " + this.partial + "\nAnswer: " + this.cloze + "\n");
	console.log("---------------\n");
	// }
};

function startProgram () {
  inquirer.prompt([
	{ 	
		type: 'rawlist',
		name: 'action',
		message: 'Which type of flashcard to you want to use?',
		choices:["Basic Flash Cards", "Cloze Flash Cards"]
	}
	]).then(function(answer) {
        // console.log(answer);
  
	  	if (answer.action === "Cloze Flash Cards"){
	        clozeFunction();
	    } else {
	        basicFunction();
	    }
	});
};

function clozeFunction() {
  if (count < 3) {
  		console.log("CREATE NEW CLOZE CARD " + count);
		inquirer.prompt([
		  {
		    type: "input",
		    name: "text",
		    message: "What is the full statement for the flash card? "
		  }, {
		  	type: "input",
		  	name: "cloze",
		  	message: "What is the cloze portion of the statement? "
		  }
		  ]).then(function(answer){
		  	var newClozeCard = new ClozeCard(
		        answer.text,
		        answer.cloze);
      		
      		clozeCardsArray.push(newClozeCard);

			count++;
			clozeFunction();
		});

	} else {
	    for (var x = 0; x < clozeCardsArray.length; x++) {
	      clozeCardsArray[x].displayInfo(x);
    }
  }
};

function basicFunction() {
	if (count < 3) {
  		console.log("CREATE NEW BASIC CARD " + count);
		inquirer.prompt([
		  {
		    type: "input",
		    name: "front",
		    message: "What is the question? "
		  }, {
		  	type: "input",
		  	name: "back",
		  	message: "What is the answer? "
		  }
		  ]).then(function(answer){
		  	var newBasicCard = new BasicCard(
	        answer.front,
	        answer.back);
      		
      		basicCardsArray.push(newBasicCard);

			count++;
			basicFunction();
		});

	} else {
    for (var x = 0; x < basicCardsArray.length; x++) {
      basicCardsArray[x].displayInfo(x);
    }
  }
};

startProgram();
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var basicCard = new BasicCard("Who was the first president of the United States?", "George Washington");
var clozeCard = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var clozeCard2 = new ClozeCard("William was the first president of the United States.", "George");


basicCard.displayBasicCard();
clozeCard.displayClozeCard();
clozeCard2.displayClozeCard();
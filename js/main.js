//memory game project 

//creating array cards to store face values of the cards
var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
//variables for cards flipped
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay);
//game logic to see if two cards have been played
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, but try again");
	}
}
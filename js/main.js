//memory game project 

//creating array cards to store face values of the cards
var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
//function to check for a match 
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
}
}

//function to store logic of when user flips card
var flipCard = function(cardId){
	console.log("User Fliped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]); 
	if (cardsInPlay.length === 2) {
		checkForMatch();}	
	}

flipCard(0);
flipCard(2);


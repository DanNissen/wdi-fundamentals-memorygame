//memory game project 

//creating array cards to store face values of the cards
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
},
];
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
	console.log("User Fliped " + cards[cardId].rank);
	console.log("User Fliped " + cards[cardId].suit); 
	console.log("User Fliped " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank); 
	if (cardsInPlay.length === 2) {
		checkForMatch();}	
	}

flipCard(0);
flipCard(2);


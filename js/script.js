// business logic
var suits = ["a", "b", "c", "d"];
var ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "d", "e"];

var vals = {"a":10, "b":10, "d":10, "e":10, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9};

var dealerHand = [];
var playerHand = [];
var newDeck = [];

var initDeck = function(arr1, arr2){
  var deck = [];
  arr1.forEach(function(suit){
    arr2.forEach(function(rank){
      // $(".test").append("<li>&#x1f0" + suit + rank + "</li>");
      deck.push("&#x1f0" + suit + rank);
    })
  })
  return deck;
}

var initGame = function(){
  dealerHand = [];
  playerHand = [];
  newDeck = initDeck(suits, ranks);
  for(i=0; i < 2; i++ ) {
    deal(playerHand, newDeck);
    deal(dealerHand, newDeck);
  };
};

var calcHand = function(hand) {
  var handValue = 0;
  for (i=0; i < hand.length; i++) {
    var card = hand[i].charAt(7);
    handValue += vals[card];
  }
  return handValue;
}

var deal = function(target, deck){
  // deal 2 cards if init === true
  target.push(deck.pop());


  // otherwise deal 1 card to the focus
}

var stand = function(){
  // toggle the focus to the dealer
}

var shuffleDeck = function(arr1) {
  var currentIndex = arr1.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr1[currentIndex];
    arr1[currentIndex] = arr1[randomIndex];
    arr1[randomIndex] = temporaryValue;
  }

  return arr1;
}




// display logic
$(function(){



});

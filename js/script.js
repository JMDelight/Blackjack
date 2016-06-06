// business logic
var suits = ["a", "b", "c", "d"];
var ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "d", "e"];
var aces = ["&#x1f0a1", "&#x1f0b1", "&#x1f0c1", "&#x1f0d1"]
var vals = {"a":10, "b":10, "d":10, "e":10, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9};


var dealerHand = [];
var playerHand = [];
var playerHandVal = 0;
var newDeck = [];

var initDeck = function(arr1, arr2){
  var deck = [];
  arr1.forEach(function(suit){
    arr2.forEach(function(rank){
      // $(".test").append("<li>&#x1f0" + suit + rank + "</li>");
      deck.push("&#x1f0" + suit + rank);
    })
  })
  shuffleDeck(deck);
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
    if (card === "1") {
      var acePresent = true;
    };
    handValue += vals[card];
  };
  if (handValue < 12 && acePresent) {
    handValue += 10;
  };
  return handValue;
};

var deal = function(target, deck){
  target.push(deck.pop());
}

var stand = function(){
  while(calcHand(dealerHand) <= 17){
    deal(dealerHand, newDeck);
  }
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

var renderHand = function(hand){
  var list = "";

  hand.forEach(function(element){
    list += "<li class='cardface'>" + element + "</li>";
  });

  return list;

}


// display logic
$(function(){
  $('.btn-disabled').prop('disabled', true);

  $("#deal").click(function(){
    deal(playerHand, newDeck)
    $(".player-hand").empty().append(renderHand(playerHand));

  });

  $("#stand").click(function(){
    $('#deal').prop('disabled', true);
    stand()
    $(".dealer-hand").empty().append(renderHand(dealerHand));

  });
  $("#new").click(function(){
    $(".hand").empty();
    initGame();
    $('.btn-disabled').prop('disabled', false);
    $(".dealer-hand").append(renderHand(dealerHand));
    $(".player-hand").append(renderHand(playerHand));

  });


});

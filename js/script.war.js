// business logic
var suits = ["a", "b", "c", "d"];
var ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "d", "e"];
var aces = ["&#x1f0a1", "&#x1f0b1", "&#x1f0c1", "&#x1f0d1"]
var vals = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "a":10, "b":11, "d":12, "e":13, "1":14};

var newDeck = [];
var leftHand = [];
var leftWin = [];
var leftPot = [];
var leftVal = 0;
var rightHand = [];
var rightWin = [];
var rightPot = [];
var newDeck = [];
var rightVal = 0;

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
  leftHand = [];
  leftWin = [];
  rightHand = [];
  rightWin = [];
  newDeck = initDeck(suits, ranks);
  for(i=0; i < 26; i++ ) {
    deal(rightHand, newDeck);
    deal(leftHand, newDeck);
  };
};

var calcHand = function(hand) {

};

var deal = function(target, deck){
  target.push(deck.pop());
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
    if(element.charAt(6) === "b" || element.charAt(6) === "c" )
      list += "<li class='cardface redface'>" + element + "</li>";
    else{
      list += "<li class='cardface'>" + element + "</li>";
    }
  });

  return list;

}


// display logic
$(function(){
  $('.btn-disabled').prop('disabled', true);

  $("#ldeal").click(function(){
    // deal(leftPot, leftHand);
    // $(".l-p-pot").empty().append(renderHand(leftPot));
    // leftVal = leftPot[leftPot.length - 1].charAt(7);
    leftVal = dealer(leftPot, leftHand, ".l-p-pot");



  });
  $("#rdeal").click(function() {
    rightVal = dealer(rightPot, rightHand, ".r-p-pot")
  })

  var dealer = function(pot, hand, qual){
    deal(pot, hand);
    $(qual).empty().append(renderHand(pot));
    return pot[pot.length - 1].charAt(7);
  }

  $("#stand").click(function(){
    // $('#deal').prop('disabled', true);
    // stand()
    // $(".left-hand").empty().append(renderHand(dealerHand));
    // if(calcHand(dealerHand) > 21){
    //   $('#dbust').show();
    // } else if(calcHand(dealerHand) >= calcHand(playerHand)){
    //   $('#dwinner').show();
    // } else {
    //   $('#pwinner').show();
    // }

  });
  $("#new").click(function(){
    // $(".msg").hide()
    // $(".hand").empty();
    // initGame();
    // $('.btn-disabled').prop('disabled', false);
    // var dealerHandPreStand = dealerHand.slice(0);
    // dealerHandPreStand[0] = "&#x1f0a0";
    // $(".dealer-hand").append(renderHand(dealerHandPreStand));
    // $(".player-hand").append(renderHand(playerHand));

  });


});

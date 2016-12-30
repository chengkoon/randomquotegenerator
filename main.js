

var quotesBank = {
  author1: ["Albert Einstein", "Try not to become a man of success, but rather try to become a man of value.",
  "Education is what remains after one has forgotten what one has learned in school.",
  "The true sign of intelligence is not knowledge but imagination."],
  author2: ["Buddha", "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "What we think, we become.",
  "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves."],
  author3: ["William Shakespeare", "Love all, trust a few, do wrong to none.",
  "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
  "There is nothing either good or bad but thinking makes it so.",
  "Better three hours too soon than a minute too late.",
  "Listen to many, speak to a few.",
  "I must be cruel, only to be kind. (also the favourite quote of many dictators)"]
}

var randomInteger = function(min, max) { //good way to generate a random number between x and y (and not from 0)
  return Math.floor(Math.random()*(max-min+1)+min)
}

function loadRandomAuthorAndQuote() {
  var randomProperty = quotesBank["author"+randomInteger(1,3)] //randomly chooses array of author1 to author3
  var onScreenAuthor = randomProperty[0] //returns the 0th index of a randomly chosen author
  var onScreenQuote = randomProperty[randomInteger(1,randomProperty.length-1)];
  $('.mainQuote').replaceWith('<div class="mainQuote">"'+onScreenQuote+'"</div>')
  $('.author').replaceWith('<div class="author">-'+onScreenAuthor+'</div>')
}

$(document).ready(function(){
  loadRandomAuthorAndQuote();
  $('.nextQuote').on('click',function(){
    loadRandomAuthorAndQuote();
  });
});

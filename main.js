//******************************************************************
// Game MATH
//******************************************************************

//******************************************************************
// HTML/CSS Interactions
//******************************************************************

//
//GRID 2X2
//Campo resultado
$(document).ready(function(){

  var newgamePlus = new MathGamePlus();  //Initialitzed object class MathGame
  console.log(newgamePlus);
  var newgameSubstraction = new MathGameSubstraction();
  console.log(newgameSubstraction);
  var newgameMultiply = new MathGameMultiply();
  console.log(newgameMultiply);
  var newgameDivision = new MathGameDivision();
  console.log(newgameDivision);

  createGrid();
$(".tile").each(function(index, object){
  $(object).append("<img class='pic' src=" + newgame.Cards[index] + ">");
});
//The other important interaction is the click listener. Remember to add the listeners when the document is loaded.
$('.tile').on('click', function(){
  $(this).children('.pic').fadeToggle();
});



});

//PLUS
function MathGamePlus(){  //Create a MemoryGame Class Plus
  this._generateCards();
  this.solutionplus = this.currentQuestion[0] + this.currentQuestion[1];  //Solution Plus
  _shuffleCard(this.currentQuestion);

}


MathGamePlus.prototype._generateCards = function(){
  // user selects a card
  function generateNumbers(optionsArray){
  var randomNumber = Math.floor((Math.random()*20)+1);
     if(optionsArray.indexOf(randomNumber) > -1){
       generateNumbers(optionsArray);
     }else{
       optionsArray.push(randomNumber);
     }
   }

   var optionsArray = [];
   for (var i=0; i<4; i++){
     generateNumbers(optionsArray);
  }
  this.currentQuestion = optionsArray;
};

//SUBSTRACTION

function MathGameSubstraction(){  //Create a MemoryGame Class Substraction
  this._generateCards();
  this.solutionsubtraction = this.currentQuestion[0] - this.currentQuestion[1];  //Solution Subtraction
  _shuffleCard(this.currentQuestion);
}




MathGameSubstraction.prototype._generateCards = function(){
  // user selects a card
  function generateNumbers(optionsArray){
  var randomNumber = Math.floor((Math.random()*20)+1);
     if(optionsArray.indexOf(randomNumber) > -1){
       generateNumbers(optionsArray);
     }else{
       optionsArray.push(randomNumber);
     }
   }

   var optionsArray = [];
   for (var i=0; i<4; i++){
     generateNumbers(optionsArray);
  }
  this.currentQuestion = optionsArray;
};

//MULTIPLY

function MathGameMultiply(){  //Create a MemoryGame Class Multiply
  this._generateCards();
  this.solutionMultiply = this.currentQuestion[0]*this.currentQuestion[1];  //Solution Multiply
  _shuffleCard(this.currentQuestion);

}

MathGameMultiply.prototype._generateCards = function(){
  // user selects a card
  function generateNumbers(optionsArray){
  var randomNumber = Math.floor((Math.random()*20)+1);
     if(optionsArray.indexOf(randomNumber) > -1){
       generateNumbers(optionsArray);
     }else{
       optionsArray.push(randomNumber);
     }
   }

   var optionsArray = [];
   for (var i=0; i<4; i++){
     generateNumbers(optionsArray);
  }
  this.currentQuestion = optionsArray;
};


//DIVISION

function MathGameDivision(){  //Create a MemoryGame Class Division
  this._generateCards();
  this.solutionDivision = this.currentQuestion[0]/this.currentQuestion[1];  //Solution Division
  _shuffleCard(this.currentQuestion);

}

MathGameDivision.prototype._generateCards = function(){
  // user selects a card
  function generateNumbers(optionsArray){
  var randomNumber = Math.floor((Math.random()*20)+1);
     if(optionsArray.indexOf(randomNumber) > -1){
       generateNumbers(optionsArray);
     }else{
       optionsArray.push(randomNumber);
     }
   }

   var optionsArray = [];
   for (var i=0; i<4; i++){
     generateNumbers(optionsArray);
  }
  this.currentQuestion = optionsArray;
};


//FUNCTION SHUFFLECARD FOR ALL CLASS

function _shuffleCard(shuffleArray){
  var currentIndex = shuffleArray.length, temporaryValue, randomIndex;  //Make a Index

    // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = shuffleArray[currentIndex];
    shuffleArray[currentIndex] = shuffleArray[randomIndex];
    shuffleArray[randomIndex] = temporaryValue;
  }
}

//COUNTER

function counter(){
  var i = 60;
  var intervalId = setInterval(function () {

    document.getElementById("counter-result").innerHTML = i;

    if (i === 0) {

      clearInterval(intervalId);
    }
      i--;
  }, 1000);
}


//GENERATE GRID

// function that builds a grid in the "body"
function createGrid() {
	// create 2 rows
    // for (var rows = 0; rows < 2; rows++) {
    //   $(document.body).append("<div class='cards'>khjhjh</div>");
    // }
	// create 2 tiles inside each row
	for (var columns = 0; columns < 4; columns++) {
	   $('.cards').append("<div class='tile'></div>");
	}
}

//ASSIGN ARRAYS

function assignArrays(){
  for(var i=0; i<4; i++){
    doc.getElementByClassName("cards")[i].innerHTML = this.currentQuestion[i];
    console.log(this.currentQuestion[i]);
  }
}

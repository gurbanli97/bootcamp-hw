
var targetScore = 0;

var yourScore = 0;

var winCount = 0;

var loseCount = 0; 


var crystals = {
    blue: {
      name: "Blue",
      value: 0
    },
     green: {
      name: "Green",
      value: 0
    },
    red: {
      name: "Red",
      value: 0
    },
    yellow: {
      name: "Yellow",
      value: 0
    }
  };


  var randNumb = function(x,y) {
      return Math.floor(Math.random() * (y-x+1) + x)
  }


  var startGame = function() {
      yourScore = 0;
      targetScore = randNumb(50,150);
      crystals.blue.value = randNumb(1,10);
      crystals.green.value = randNumb(1,10);
      crystals.red.value = randNumb(1,10);
      crystals.yellow.value = randNumb(1,10);

    $('#target-score').html(targetScore)
    $('#your-score').html(yourScore)

  }


  var resetGame  = function() {
      if(yourScore > targetScore) {
          alert('Ups.. You lost!')
          loseCount++
          startGame()
      } else if(yourScore == targetScore) {
          alert('Congrats You won!')
          winCount++
          startGame()
      }

      $('#loss-count').html(loseCount)
      $('#win-count').html(winCount)

  }


  var addScore = function(clickedCrystal){
        yourScore += clickedCrystal.value
        $('#your-score').html(yourScore)
        resetGame()
  }


 $("#blue").click(function() {
    addScore(crystals.blue)
  });

  $("#red").click(function() {
    addScore(crystals.red)
  });
  $("#green").click(function() {
    addScore(crystals.green)
  });

  $("#yellow").click(function() {
    addScore(crystals.yellow)
  });

  /* $("#blue").click(function() {
    yourScore += crystals.blue.value 
    $('#your-score').html(yourScore)
    resetGame()
  });
  
  $("#red").click(function() {
    yourScore += crystals.red.value 
    $('#your-score').html(yourScore)
    resetGame()

  });
  
  $("#green").click(function() {
    yourScore += crystals.green.value 
    
    $('#your-score').html(yourScore)
    resetGame()
    
  });
  
  $("#yellow").click(function() {
    yourScore += crystals.yellow.value 
    $('#your-score').html(yourScore)
    resetGame()

  });
 */
  startGame()

  
  console.log(targetScore)




 

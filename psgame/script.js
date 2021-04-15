var letters = ['a','b','c','d']

var newLetter;

var wins = 0

var losses = 0

var guesses = 9

var alreadyGuessed = []


var leftGuesses = function() {
    document.getElementById('left').innerText = guesses
}

var updateLetter = function() {
    newLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(newLetter)
}

var updateGuesses = function() {
    document.getElementById('guessed').innerText = alreadyGuessed.join(',')
}





var reset = function() {
    guesses = 9;
    alreadyGuessed = []
    updateLetter()
    updateGuesses()
    leftGuesses()

}


updateLetter()
leftGuesses()



window.onkeypress = function(e) {
    var choice = e.key;
    if(alreadyGuessed.indexOf(choice) === -1) {
        alreadyGuessed.push(choice)
    }else {
        return
    }

    guesses--
    updateGuesses()
    leftGuesses()
    
    if(choice === newLetter) {
        wins++
        document.getElementById('wins').innerText = wins
        reset()
    }

    if(guesses === 0) {
        losses++
        document.getElementById('losses').innerText = losses


        reset()
    }

    

    
}



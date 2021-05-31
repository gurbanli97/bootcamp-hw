var firebaseConfig = {
    apiKey: "AIzaSyAoKq5fPuTFALrj92cA1XYQOLeIB5ah7vE",
    authDomain: "bootcamp-43732.firebaseapp.com",
    databaseURL: "https://bootcamp-43732-default-rtdb.firebaseio.com",
    projectId: "bootcamp-43732",
    storageBucket: "bootcamp-43732.appspot.com",
    messagingSenderId: "525194065732",
    appId: "1:525194065732:web:43aaa242f352afdf084911"
};


firebase.initializeApp(firebaseConfig);
var db = firebase.database();
var currentRoom;
var player1choice;
var player2choice;


//Creating room as player1
$("#createBtn").on("click", function () {
    if ($("#createUser").val().trim() && $("#createRoom").val().trim()) {
        player1Name = $("#createUser").val();
        createRoom = $("#createRoom").val();
        currentRoom = createRoom
        db.ref(`Rooms/`).once("value")
            .then(function (snapshot) {
                if (snapshot.child(currentRoom).exists()) {
                    alert('Room with this name already exists,please use another name')
                } else {
                    player1 = {
                        Name: player1Name,
                        Wins: 0,
                        Losses: 0,
                        Draws: 0,
                        guess: ''
                    }
                    db.ref(`Rooms/${createRoom}/player1`).set(
                        player1
                    )
                    db.ref(`Rooms/${currentRoom}`).on("value", function (snapshot) {
                        $("#player1Name").text(snapshot.val().player1.Name)
                        $('.player1 #wins').text('Wins: ' + snapshot.val().player1.Wins)
                        $('.player1 #losses').text('Losses: ' + snapshot.val().player1.Losses)
                        $('.player1 #draws').text('Draws: ' + snapshot.val().player1.Draws)
                    })


                    $('.main-wrapper').remove()
                    $('.game-wrapper').show()
                    $('.player2 > div').css('pointer-events', 'none')


                    $(".chatbox").html("")
                    $('#send').addClass('player1Send')
                    showMessage(currentRoom)

                }
            })
    } else {
        alert('Inputs cant be empty!')
    }

    /* window.onbeforeunload = function(){
        db.ref(`Rooms/${currentRoom}`).onDisconnect().removeValue(player1) 
    } */
});



//Joining existing room as player2
$("#joinBtn").on("click", function () {
    if ($("#joinUser").val().trim() && $("#joinRoom").val().trim()) {
        player2Name = $("#joinUser").val();
        joinRoom = $("#joinRoom").val();
        console.log(player2Name, joinRoom);
        player2 = {
            Name: player2Name,
            Wins: 0,
            Losses: 0,
            Draws: 0,
            guess: ''   
        }
        currentRoom = joinRoom
        db.ref(`Rooms/`).once("value").then(function (snapshot) {
            
            if (snapshot.hasChild(joinRoom) && Object.values(Object.values(snapshot.val())[0]).length < 2) {


                db.ref(`Rooms/${joinRoom}/player2`).set(player2)
                db.ref(`Rooms/${currentRoom}`).on("value", function (snapshot) {
                    $("#player2Name").text(snapshot.val().player2.Name)
                    $('.player2 #wins').text('Wins: ' + snapshot.val().player2.Wins)
                    $('.player2 #losses').text('Losses: ' + snapshot.val().player2.Losses)
                    $('.player2 #draws').text('Draws: ' + snapshot.val().player2.Draws)
                    $("#player1Name").text(snapshot.val().player1.Name)
                })



                $('.main-wrapper').remove()
                $('.game-wrapper').show()
                $('.player1 > div').css('pointer-events', 'none')



                $(".chatbox").html("")
                $('#send').addClass('player2Send')

                showMessage(currentRoom)



            } else {
                alert("Room with such name doesnt exist or is already full")
            }
        })

    } else {
        alert('Inputs cant be empty!')
    }
});

//Making guess
$(".player1-guess .guess").on("click", function () {
    $(".player1-guess .guess").removeClass('active')
    $(this).addClass('active')
    var player1Guess = $(this).data("value")
    console.log(player1Guess);
    db.ref("Rooms/" + currentRoom + "/player1").update({
        guess: player1Guess
    })
    startGame()
})
$(".player2-guess .guess").on("click", function () {
    $(".player2-guess .guess").removeClass('active')
    $(this).addClass('active')
    var player2Guess = $(this).data("value")
    console.log(player2Guess);
    db.ref("Rooms/" + currentRoom + "/player2").update({
        guess: player2Guess
    })
    startGame()
})
db.ref(`Rooms/`).on("value", function (snapshot) {
    if (currentRoom) {
        setValues(currentRoom)
    }
})


//Update and print win,lose,draw values

function setValues(currentRoom) {
    db.ref(`Rooms/${currentRoom}`).once("value", function (snapshot) {

        if (snapshot.hasChild("player1")) {
            $(".player1 #wins").text('Wins: ' + snapshot.child("player1").val().Wins)
            $(".player1 #losses").text('Losses: ' + snapshot.child("player1").val().Losses)
            $(".player1 #draws").text('Draws: ' + snapshot.child("player1").val().Draws)
            player1choice = snapshot.child("player1").val().guess
        }

        if (snapshot.hasChild("player2")) {
            $("#player2Name").text(snapshot.val().player2.Name)
            $(".player2 #wins").text('Wins: ' + snapshot.child("player2").val().Wins)
            $(".player2 #losses").text('Losses: ' + snapshot.child("player2").val().Losses)
            $(".player2 #draws").text('Draws: ' + snapshot.child("player2").val().Draws)
            player2choice = snapshot.child("player2").val().guess
        }
    })
}


function draw() {
    console.log('draw')
    db.ref("Rooms/" + currentRoom + "/player1").update({
        Draws: firebase.database.ServerValue.increment(1),
    })
    db.ref("Rooms/" + currentRoom + "/player2").update({
        Draws: firebase.database.ServerValue.increment(1),
    })
    db.ref("Rooms/" + currentRoom + "/player1").update({
        guess: "null"
    })
    db.ref("Rooms/" + currentRoom + "/player2").update({
        guess: "null"
    })
}

function playerOneWon() {
    console.log('1won')
    db.ref("Rooms/" + currentRoom + "/player1").update({
        Wins: firebase.database.ServerValue.increment(1),
    })
    db.ref("Rooms/" + currentRoom + "/player2").update({
        Losses: firebase.database.ServerValue.increment(1),
    })
    db.ref("Rooms/" + currentRoom + "/player1").update({
        guess: "null"
    })
    db.ref("Rooms/" + currentRoom + "/player2").update({
        guess: "null"
    })
}

function playerTwoWon() {
    console.log('2won')
    db.ref("Rooms/" + currentRoom + "/player2").update({
        Wins: firebase.database.ServerValue.increment(1),
    })
    db.ref("Rooms/" + currentRoom + "/player1").update({
        Losses: firebase.database.ServerValue.increment(1),
    })
    db.ref("Rooms/" + currentRoom + "/player1").update({
        guess: "null"
    })
    db.ref("Rooms/" + currentRoom + "/player2").update({
        guess: "null"
    })
}

function startGame() {
    console.log(player1choice, player2choice)
    if (player1choice === "Rock" && player2choice === "Rock") {
        draw();
    } else if (player1choice === "Paper" && player2choice === "Paper") {
        draw();
    } else if (player1choice === "Scissors" && player2choice === "Scissors") {
        draw();
    } else if (player1choice === "Rock" && player2choice === "Paper") {
        playerTwoWon();
    } else if (player1choice === "Rock" && player2choice === "Scissors") {
        playerOneWon();
    } else if (player1choice === "Paper" && player2choice === "Rock") {
        playerOneWon();
    } else if (player1choice === "Paper" && player2choice === "Scissors") {
        playerTwoWon();
    } else if (player1choice === "Scissors" && player2choice === "Rock") {
        playerTwoWon();
    } else if (player1choice === "Scissors" && player2choice === "Paper") {
        playerOneWon();
    }
}



//Print chat messages to chatbox from firebase
function showMessage(currentRoom){
    db.ref(`Rooms/${currentRoom}/player1/chat`).on("value", function(snapshot){
        if(snapshot.val()){

            $(".chatbox").append(`<p class="chatMessage p1">Player-1: ${snapshot.val()}</p>`)
        }

        
    })
    
    db.ref(`Rooms/${currentRoom}/player2/chat`).on("value", function(snapshot){
        if(snapshot.val()){
            $(".chatbox").append(`<p class="chatMessage p2">Player-2: ${snapshot.val()}</p>`)
        }
       
    })
}


//Send chat messages to firebase

$(document).on("click", ".player1Send", function(){
    var message = $("#chatInput").val().trim()
    db.ref("Rooms/"+ currentRoom + "/player1").update({
        chat: message
    })

    
    db.ref("Rooms/"+ currentRoom + "/player1").update({
        chat: ''
    })
   
    $("#chatInput").val("")
})


$(document).on("click", ".player2Send", function(){
    var message = $("#chatInput").val().trim()
    db.ref("Rooms/"+ currentRoom + "/player2").update({
        chat: message
    })

    db.ref("Rooms/"+ currentRoom + "/player2").update({
        chat: ''
    })
    $("#chatInput").val("")
})





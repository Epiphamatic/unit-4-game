
$(document).ready(function(){

// Variables 

var attack = "Attack " + Math.floor(Math.random() * 100);

var hero = 0;

var foe = 0;

var charArray = [];

var player;

var defender;

// Create values for the attacker and current enemy

// function character(name, atk, hp, ca, pic) {

//     this.name = name;

//     this.attackPower = atk;

//     this.healthPoints = hp;

//     this.counterAttackPower = ca;

//     this.pic = pic;

// };

// function initCharacters() {

//     var darthVader = new character("Darth Vader", 100, 10, 5, "../assets/images/Vader.gif_c200");

//     var boba = new character("Boba Fett", 200, 50, 30, "../assets/images/Bobafett.gif");

//     var ewok = new character("The Ewok", 150, 15, 2, "../assets/images/Ewok.gif");

//     var jabba = new character("Jabba the Hut", 180, 30, 12, "../assets/images/Jabba.gif");

//     charArray.push(darthVader, boba, ewok, jabba);
// };


// function characterCards(divID) {

//     $(divID).children().remove();

//     for (var i = 0; i < charArray.length; i++) {
//         $(divID).append("<div class = 'card text-center text-white blackbg card-width cardHover enemy'> </div>");
//         $(divID + " div:last-child").attr("id", charArray[i].name);

//         $(divID + " div:last-child").append("<div class ='card-picture-top'> </div>");

//         $(divID + " div:last-child").append("<img class='card-pic'></img>");
//         $(divID + " img:last-child").attr("src", charArray[i].pic);

//         $(divID).append("<div class='card-body'> </div>");
//         $(divID + " div:last-child").append("HP: " + charArray[i].healthPoints);
//         $(divID + " div:last-child").append();

//     }
// }


// Move one div down to the next one

$(".card").click(function(){

    if (hero == 0) {

        $(this).removeClass("enemy").addClass("hero");

        charChosen();

        hero = 1;
        
        attacker = this;

        enemyMessage();

        giveStats();

        console.log(this);

    }

    else if (hero == 1 && foe == 0) {

        $(this).addClass("currentEnemy");

        foeChosen();

        foe = 1;

        cEnemy = this;

        console.log(this);

    }

});

function charChosen() {

    $(".enemy").detach().appendTo("#enemyRow")

};

function foeChosen() {

    $(".currentEnemy").detach().appendTo("#currentEnemyRow");

    $(".hero").detach().appendTo("#heroRow");

}

// Message divs

var messages = $("<div>")

function enemyMessage() {

    $(".bottomText").append("<hr> <div> Select a character to be your enemy! </div> ")

}

// Add the stats once a hero is chosen

function giveStats() {

   $(".stats").append(attack);
    
}



// Reset the game so that the player can try again

function resetGame() {

    hero = 0;

    foe = 0;

    $(".card").addClass("enemy").removeClass("hero currentEnemy");

    $(".enemy").detach().appendTo("#heroRow");

    $('.narrative div').empty();

    $('.stats').empty();
}

// Link it to the reset button, but I could just put the function inside
// I'll keep them separate for now

$("#restartBtn").click(function(){

    resetGame();

});

$("#attackBtn").click(function() {

    enemyMessage();


});

// Create the cards for the beginning of the game

// initCharacters();

// function test(divID) {
//     $(divID).append("<div class = 'card text-center text-white blackbg card-width cardHover enemy'> </div>");

//     $("<div class = 'card text-center text-white blackbg card-width cardHover enemy'> </div>").append("<div class ='card-picture-top'> </div>");

//     $(divId + " <div class = 'card text-center text-white blackbg card-width cardHover enemy'> </div>").append("<img class='card-pic'></img>");

//     $(divId + " <div class = 'card text-center text-white blackbg card-width cardHover enemy'> </div>").append("<div class='card-body'> </div>");
//     $(divID + " div:last-child").append("HP: 00 ");
//     $(divId + "<div class='card-body'> </div>").append("HP: 00 ");
//     $("<div class='card-body'> </div>").append("<button class='btn btn-danger char-btn' id='char-btn'>Select</button>");
// };

// test("#enemyRow");

// characterCards("#game");

});





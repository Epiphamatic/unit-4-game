// Variables 

var baseAttack = 0; // original attack strength
var player; // holds the player Object
var defender; // holds the current defender Object
var charArray = []; // array that stores the game characters (Objects)
var playerSelected = false; // flag to mark if we picked a player yet
var defenderSelected = false; // flag to mark if we picked a defender

// Create values for the attacker and current enemy

function character(name, atk, hp, ca, pic, idc) {

    this.name = name;

    this.attackPower = atk;

    this.healthPoints = hp;

    this.counterAttackPower = ca;

    this.pic = pic;

    this.idc = idc;

};

function initCharacters() {

    var darthVader = new character("Darth Vader", 100, 10, 15, "./assets/images/Vader.gif_c200", "darthVader");

    var boba = new character("Boba Fett", 200, 50, 30, "./assets/images/Bobafett.gif", "boba");

    var ewok = new character("The Ewok", 150, 15, 12, "./assets/images/Ewok.gif", "ewok");

    var jabba = new character("Jabba the Hut", 180, 30, 12, "./assets/images/Jabba.gif", "jabba");

    charArray.push(darthVader, boba, ewok, jabba);
};

function characterCards(divID) {

    $(divID).children().remove();

    for (var i = 0; i < charArray.length; i++) {

        $(divID).append("<div></div>");
        $(divID + " div:last-child").addClass("card text-center text-white card-width cardHover enemy");
        $(divID + " div:last-child").attr("id", charArray[i].idc);
        $(divID + " div:last-child").append("<img>");
        $(divID + " img:last-child").attr("class", "card-img-top card-picture-top");
        $(divID + " img:last-child").attr("src", charArray[i].pic);
        // $(divID + " img:last-child").addClass("card-pic");
        $(divID + " div:last-child").append("<br>" + charArray[i].name + "<br>");
        $(divID + " div:last-child").append("ATK: " + charArray[i].attackPower + "<br>");
        $(divID + " div:last-child").append("HP: " + charArray[i].healthPoints + "<br>");
        $(divID + " div:last-child").append("CA: " + charArray[i].counterAttackPower + "<br>");
        
    }
}

// function updatePics(fromDivID, toDivID) {
//     $(fromDivID).children().remove();
//     for (var i = 0; i < charArray.length; i++) {
//         $(toDivID).append("<img />");
//         $(toDivID + " img:last-child").attr("id", charArray[i].name);
//         $(toDivID + " img:last-child").attr("src", charArray[i].pic);
//     }
// };


// function setBaseAttack(Obj) {

//     baseAttack = Obj.attackPower;

// };

// function isAlive(Obj) {

//     if (Obj.healthPoints > 0) {

//         return true;

//     }

//     return false;

// }

// // Checks if the player has won

// function isWinner() {

//     if (charArray.length == 0 && player.healthPoints > 0)

//         return true;

//     else return false;

// }

// character.prototype.increaseAttack = function () {

//     this.attackPower += baseAttack;
// };

// character.prototype.attack = function (Obj) {
    
//     Obj.healthPoints -= this.attackPower;

//     $("#.bottomText").html("<hr> <div> You attacked " +

//         Obj.name + "for " + this.attackPower + " damage points. </div>");

//     this.increaseAttack();
// };

// // Move one div down to the next one

// function render() {

//     $(".hero").remove().appendTo("#heroRow");
//     $(".enemy").remove().appendTo("#enemyRow");
//     $(".currentEnemy").remove().appendTo("#currentEnemyRow");

// };

// $(".card").click(function() {

//      // Stores the character the user has clicked on in the player variable and removes it from charArray
//      if (!playerSelected) {
//         for (var i = 0; i < charArray.length; i++) {
//             if (charArray[i].name == (this).id) {
//                 player = charArray[i]; // sets current player
//                 // playAudio(); // starts theme song
//                 setBaseAttack(player);
//                 charArray.splice(i, 1);
//                 playerSelected = true;
//                 $(this).removeClass("enemy").addClass("hero");
//                 console.log(this)
//                 render();
                
//             }
//         }
        // updatePics("#game", "#defendersLeftDiv");
        // $("#playerDiv").append(this); // appends the selected player to the div
        // $("#playerDiv").addClass("animated zoomIn");
        // $("#playerDiv").append(player.name);
        // $("#playerHealthDiv").append("HP: " + player.healthPoints);
        // $("#playerHealthDiv").addClass("animated zoomIn");
    // }
    // // Stores the defender the user has clicked on in the defender variable and removes it from the charArray
    // // if (playerSelected && !defenderSelected && (this.id != player.name)) {
    // //     for (var j = 0; j < charArray.length; j++) {
    // //         if (charArray[j].name == (this).id) {
    // //             defender = charArray[j]; // sets defender
    // //             charArray.splice(j, 1);
    // //             defenderSelected = true;
    // //             $(this).addClass("currentEnemy");
    // //             foeChosen();
    
    // //         }
    // //     }
    //     // $("#enemyRow").append(".enemy"); // appends the selected defender to the div 
    //     // $("#enemyRow").addClass("animated zoomInRight");
      
//     }
   

// });

$("#attackBtn").click(function() {

    console.log("Click")

});

// $(".card").click(function(){

//     if (!hero) {

//         $(this).removeClass("enemy").addClass("hero");

//         charChosen();

//         hero = true;

//         enemyMessage();

//         console.log(this);

//     }

//     else if (hero && !foe) {

//         $(this).addClass("currentEnemy");

//         foeChosen();

//         foe = 1;

//         cEnemy = this;

//         console.log(this);

//     }

// });

// $("#attackBtn").click(function() {

//     if (playerSelected && defenderSelected) {
//         if (isAlive(player) && isAlive(defender)) {
//             player.attack(defender);
//             defender.counterAttack(player);
//             $("#playerHealthDiv").html("HP: " + player.healthPoints);
//             $("#defenderHealthDiv").html("HP: " + defender.healthPoints);
//             if (!isAlive(defender)) {
//                 $("#defenderHealthDiv").html("DEFETED!");
//                 $("#playerHealthDiv").html("Enemy defeated!");
//                 $("#msg").html("Pick another enemy to battle...");
//             }
//             if (!isAlive(player)) {
//                 $("#playerHealthDiv").html("YOU LOST!");
//                 $("#msg").html("Try again...");
//                 $("#attackBtn").html("Restart Game");
//                 $(document).on("click", "#attackBtn", function () { // restarts game
//                     location.reload();
//                 });
//             }
//         }
//         if (!isAlive(defender)) {
//             $("#defenderDiv").removeClass("animated zoomInRight");
//             $("#defenderHealthDiv").removeClass("animated zoomInRight");
//             $("#defenderDiv").children().remove();
//             $("#defenderDiv").html("");
//             $("#defenderHealthDiv").html("");
//             defenderSelected = false;
//             if (isWinner()) {
//                 $("#secondScreen").hide();
//                 $("#globalMsg").show();
//             }
//         }
//     }
// });

// function charChosen() {

//     $(".enemy").detach().appendTo("#enemyRow")

// };

// function foeChosen() {

//     $(".currentEnemy").detach().appendTo("#currentEnemyRow");

//     $(".hero").detach().appendTo("#heroRow");

// }

// // Message divs

// function enemyMessage() {

//     $(".bottomText").append("<hr> <div> Select a character to be your enemy! </div> ")

// }

// // Reset the game so that the player can try again

// function resetGame() {

//     hero = false;

//     foe = false;

//     $(".card").addClass("enemy").removeClass("hero currentEnemy");

//     $(".enemy").detach().appendTo("#heroRow");

//     $('.narrative div').empty();

//     $('.stats').empty();
// }

// // Link it to the reset button, but I could just put the function inside
// // I'll keep them separate for now

// $("#restartBtn").click(function(){

//     resetGame();

// });

// $("#attackBtn").click(function() {

//     enemyMessage();


// });

$(document).ready(function(){

initCharacters();
characterCards("#heroRow");

});
var playerSelect = $("#playerSelect");
var currentPlayer = $("#currentPlayer");
var enemies = $("#enemies");
var defender = $("#currentDefender");
var attackInfo = $("#attackInfo");
var attackButton = $("#attack");
var restartButton = $("#restart");

var characters = [["Scorpion", 150, 20, "assets/images/Scorpion.png"], ["Sheeva", 150, 25, "assets/images/Sheeva.png"], ["Sonya", 150, 15, "assets/images/Sonya.png"], ["Sub Zero", 150, 35, "assets/images/SubZero.png"]];

var player = [];

var enemy = [];


var attack;


/******************* FUNCTIONS **********************/


//Function takes these characters and displays their images on screen.
function displayCharacters(location , arr) {
    $(".characters").remove();
    var myDiv;
    var image;
    var paragraph;
    
    for (var i = 0; i < characters.length; i++) {
        myDiv = $("<div>");
        image = $("<img>");
        paragraph = $("<p>");
        myDiv.attr("id", "character"+i);
        myDiv.addClass("characters");

        image.attr("src", arr[i][3]);
        paragraph.text(arr[i][0]);

        myDiv.append(image);
        myDiv.append(paragraph);
        $(location).append(myDiv);
    }
}




    //remove other players to defender array
    //change playerSelect h3 text to Player
    //change style to make player in center

// Moves other characters to the enemies div
//displays players stats: Life and current attack
//displays defenders stats: Life and current attack

// Function for onclick choosing current defender moves character from enemies div to defender div



$(document).ready(function(){

    displayCharacters("#playerSelect", characters);
//Function for onclick selecting players character moving character to player div
$(".characters").on("click", function(){
    var playerId = ($(this).attr("id"));
    var playerNum = parseInt(playerId[9]);
    console.log(playerId + " " + playerNum);
    player.push(characters[playerNum]);
    console.log(player);
    characters.splice(playerNum, 1);
    console.log(characters);
    
    //displayCharacters("#playerSelect", player);
    
    displayCharacters("#enemies", characters);
    
    myDiv = $("<div>");
    image = $("<img>");
    myDiv.attr("id", playerId);
    myDiv.addClass("player");
    image.attr("src", player[0][3]);
    myDiv.append(image);
    $("#playerSelect").append(myDiv);
    
    $("#playerSelect h3").html("Player");
    
    
    
});
    
});
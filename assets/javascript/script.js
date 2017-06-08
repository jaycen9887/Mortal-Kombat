var characters = [["SCORPION", 150, 7, "assets/images/Scorpion.png"], ["SHEEVA", 150, 8, "assets/images/Sheeva.png"], ["SONYA", 150, 9, "assets/images/Sonya.png"], ["SUB ZERO", 150, 10, "assets/images/SubZero.png"]];

var player = [];

var enemy = [];

var attack;
var playerId;
var playerNum;
var enemyId;
var enemyNum;
var myDiv;
var image;
var paragraph;

/******************* FUNCTIONS **********************/

function restart() {
    location.reload();
}

function attacking() {
    
}

//Function takes these characters and displays their images on screen.
function displayCharacters(location , arr, className) {
    $(".characters").remove();
    $(".enemies").remove();
    
    for (var i = 0; i < characters.length; i++) {
        myDiv = $("<div>");
        image = $("<img>");
        paragraph = $("<p>");
        myDiv.attr("id", "character"+i);
        myDiv.addClass(className);

        image.attr("src", arr[i][3]);
        paragraph.text(arr[i][0]);

        myDiv.append(image);
        myDiv.append(paragraph);
        $(location).append(myDiv);
    }
}

function displayPlayer() {
    myDiv = $("<div>");
    image = $("<img>");
    paragraph = $("<p>");
    myDiv.attr("id", playerId);
    myDiv.addClass("player");
    
    image.attr("src", player[0][3]);
    paragraph.text(player[0][0]);
    
    myDiv.append(image);
    myDiv.append(paragraph);
    $("#playerSelect").append(myDiv); 
}

function displayDefender() {
    myDiv = $("<div>");
    image = $("<img>");
    paragraph = $("<p>");
    myDiv.attr("id", enemyId);
    myDiv.addClass("defender");
    
    image.attr("src", enemy[0][3]);
    paragraph.text(enemy[0][0]);
    
    myDiv.append(image);
    myDiv.append(paragraph);
    $("#playerSelect").append(myDiv);
    
    $(".player").css("margin-left", "70px");
    
    $("#playerContainer h3").html("VS");
    $("#playerContainer h3").css({"position": "relative", "top": "55px"});
    $("#playerContainer").css("height", "150px");
    $("#playerSelect").css("top", "-55px");
    $(".enemies").css("margin-left", "70px");
    $("#enemyContainer").css("top", "290px");
    $("#buttons").css("top", "270px");
    $("#buttons #Attack").toggleClass("invisible");
    $(".attackInfo").css("top", "0px");
    
    enemyHP();
}

function playerHP() {
    myDiv = $("<div>");
    paragraph = $("<p>");
    paragraph.text("HP " + player[0][1]);
    myDiv.append(paragraph);
    myDiv.attr("id", "playerHP");
    $("#playerSelect").append(myDiv);
}

function enemyHP() {
    var location = $("#"+ enemyId);
    myDiv = $("<div>");
    paragraph = $("<p>");
    paragraph.text("HP " + enemy[0][1]);
    myDiv.append(paragraph);
    myDiv.attr("id", "enemyHP");
    location.append(myDiv);
}
   


$(document).ready(function(){

    displayCharacters("#playerSelect", characters, "characters");
//Function for onclick selecting players character moving character to player div
$(".characters").on("click", function(){
    playerId = ($(this).attr("id"));
    playerNum = parseInt(playerId[9]);
    console.log(playerId + " " + playerNum);
    player.push(characters[playerNum]);
    console.log(player);
    characters.splice(playerNum, 1);
    console.log(characters);
    
    //displayCharacters("#playerSelect", player);
    
    displayCharacters("#enemies", characters, "enemies");
    
    displayPlayer();
    playerHP();
    $("#playerContainer h3").html("Player");    
    
    $(".enemies").on("click", function(){
        enemyId = ($(this).attr("id"));
        enemyNum = parseInt(enemyId[9]);
        console.log(enemyId + " " + enemyNum); 
        enemy.push(characters[enemyNum]);
        console.log(enemy);
        characters.splice(enemyNum, 1);
        console.log(characters);
        
        displayCharacters("#enemies", characters, "enemies");
        
        displayDefender();
    });
    
});
    
    
    
    
});
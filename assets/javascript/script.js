var characters = [["SCORPION", 120, 8, "assets/images/Scorpion.png"], ["SHEEVA", 100, 5, "assets/images/Sheeva.png"], ["SONYA", 150, 20, "assets/images/Sonya.png"], ["SUB ZERO", 180, 25, "assets/images/SubZero.png"]];

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


var playerHealth;
var playerAttack;
var playerUpAttack;
    
var enemyHealth;    
var enemyAttack;

/******************* FUNCTIONS **********************/

function restart() {
    location.reload();
}

function attacking() {    
    playerHealth -= enemyAttack;
    enemyHealth -= playerAttack;
    playerAttack += player[0][2];
    
    $("#playerStats").html(player[0][0] + " <br/>" + "Health: " + playerHealth + " <br/>" + "Attack: " + playerAttack);
    $("#enemyStats").html(enemy[0][0] + " <br/>" + "Health: " + enemyHealth + " <br/>" + "Attack: " + enemyAttack);   
    
    checkProgress();
    
}

function checkProgress() {
    if (playerHealth <= 0 && enemyHealth > 0){
        loose();        
    }else if (enemyHealth <= 0 && playerHealth > 0){
        nextEnemy();
    }else if (enemyHealth <= 0 && playerHealth <= 0){
        draw();
    }
    
}

function nextEnemy(){
    if (characters.length !== 0){
        //remove enemy from playerselect div
        document.getElementById(enemyId).remove();

        //remove stats from attackinfo
        $("#enemyStats").html("");
        
        $("#playerContainer h3").html("You have defeated " + enemy[0][0] + " . <br/> Select a new enemy to fight.");
        $("#playerContainer h3").css("top", "-60px");
        $("#buttons").css("top", "300px");
        $("#enemyContainer").css("top", "380px");  
        $("#Attack").toggleClass("invisible");
    }
}

function loose(){
    //remove enemy from playerselect div
        document.getElementById(playerId).remove();
        document.getElementById(enemyId).remove();
        
        //remove stats from attackinfo
        $("#playerStats").html("");
        $("#enemyStats").html("");
    
        $("#playerContainer h3").html(enemy[0][0] + " has defeated you. <br/> Press 'Restart' to play again.");
        $("#buttons").css("top", "300px");
}

function draw() {
    document.getElementById(playerId).remove();
    document.getElementById(enemyId).remove();
        
        
        //remove stats from attackinfo
        $("#playerStats").html("");
        $("#enemyStats").html("");
    
        $("#playerContainer h3").html("DRAW: CLICK RESTART");
    
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
    myDiv.attr("id", "player");
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
    $("#enemyContainer").css("top", "320px");
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

 var selectEnemy = $(".enemies").on("click", function(){
    enemyId = ($(this).attr("id"));
    enemyNum = parseInt(enemyId[9]);
    enemy.push(characters[enemyNum]);
    characters.splice(enemyNum, 1);

    displayCharacters("#enemies", characters, "enemies");

    displayDefender();


    playerHealth = player[0][1];
    playerAttack = player[0][2];
    playerUpAttack = player[0][2];

    enemyHealth = enemy[0][1];    
    enemyAttack = enemy[0][2];
        
        
 });
  


$(document).ready(function(){

    displayCharacters("#playerSelect", characters, "characters");
//Function for onclick selecting players character moving character to player div
$(".characters").on("click", function(){
    playerId = ($(this).attr("id"));
    playerNum = parseInt(playerId[9]);
    player.push(characters[playerNum]);
    characters.splice(playerNum, 1);
    
    //displayCharacters("#playerSelect", player);
    
    displayCharacters("#enemies", characters, "enemies");
    
    displayPlayer();
    playerHP();
    $("#playerContainer h3").html("Player");    
    
   
    
});
    
    
    
    
});
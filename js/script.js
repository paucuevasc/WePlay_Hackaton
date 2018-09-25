

var nPlayer;
var timer;

function newGameCreator() {
    $("document").ready(function () {
        $("#content").replaceWith("<div id=gameSettup> </div>");
        settupCreator();
        finnishButtonCreator();
    })
}


function settupCreator() {
    $("document").ready(function () {
        $("#gameSettup").append("<br> Number of players<input type='range' min='5' max='25' value='15' class='slider' id='nPlayersSlider' onchange='nPlayersShower()'></input><output id='nPlayersValue'> </output><br> Timer setup (seconds)<input type='range' min='15' max='300' value='60' class='slider' id='timerSlider' onchange='timerShower()'><output id='timerValue'></output></input><br> Game mode<select multiple size='1'><option value='live'>live</option><option value='live'>chat</option></select>");

    })
}
function finnishButtonCreator(){
    $("document").ready(function () {
    $("#gameSettup").append("<br><input id='finnishButton' class='selectors' type='button' value='Create' onclick='gameHubStart()'></input>");
})
}
function nPlayersShower(nPlayer) {
    nPlayer = document.getElementById('nPlayersSlider').value;
    document.getElementById('nPlayersValue').innerHTML = nPlayer;
}
function timerShower(timer) {
    timer = document.getElementById('timerSlider').value;
    document.getElementById('timerValue').innerHTML = timer;
}
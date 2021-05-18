var result = document.getElementById("result");

var player = document.getElementById("player");

var computer = document.getElementById("computer");

var count_player = 0;

var count_computer = 0;

function getComputerChoice() {

    const randomChoice = (Math.floor(Math.random() * 3));

    if (randomChoice == 0) {
        return 'Rock';
    }
    else if (randomChoice == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function start() {

    player.innerHTML = 0;
    computer.innerHTML = 0;

    count_computer = 0;
    count_player = 0;

    result.innerHTML = "Result";
}

function rock() {

    var computer_choice = getComputerChoice();
    var player_Choice = "Rock";

    if (player_Choice === computer_choice) {

        result.innerHTML = "Draw! Computer picked: "+computer_choice;
    }
    else if (computer_choice === "Scissors") {

        count_player++;
        result.innerHTML = "You win! Computer picked: " + computer_choice;
        player.innerHTML = count_player;
    }
    else {

        count_computer++;
        result.innerHTML = "Computer wins! Computer picked: " + computer_choice;
        computer.innerHTML = count_computer;
    }
}

function paper() {

    var computer_choice = getComputerChoice();
    var player_Choice = "Paper";

    if (player_Choice === computer_choice) {

        result.innerHTML = "Draw! Computer picked: "+computer_choice;
    }
    else if (computer_choice === "Rock") {

        count_player++;
        result.innerHTML = "You win! Computer picked: " + computer_choice;
        player.innerHTML = count_player;
    }
    else {

        count_computer++;
        result.innerHTML = "Computer wins! Computer picked: " + computer_choice;
        computer.innerHTML = count_computer;
    }

}

function scissors(){

    var computer_choice = getComputerChoice();
    var player_Choice = "Scissors";

    if (player_Choice === computer_choice) {

        result.innerHTML = "Draw! Computer picked: "+computer_choice;
    }
    else if (computer_choice === "Paper") {

        count_player++;
        result.innerHTML = "You win! Computer picked: " + computer_choice;
        player.innerHTML = count_player;
    }
    else {

        count_computer++;
        result.innerHTML = "Computer wins! Computer picked: " + computer_choice;
        computer.innerHTML = count_computer;
    }


}
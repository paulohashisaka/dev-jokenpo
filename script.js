
const result = document.querySelector(".result");
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");

let humanPoints = 0;
let computerPoints = 0;

/*
humanPoints e computerPoints -> Camel Case
human_score e computer_score -> Snake Case
HumanScore e ComputerScore -> Pascal Case
GAME_OPTIONS -> Snake Case (constantes)
*///ENUM -> Enumeração, é um tipo de dado que pode conter um conjunto de valores pré-definidos.
const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
};

const playHuman = (humanChoice) => {

    playGame(humanChoice, playComputer());
}

const playComputer = () => {
    const computerChoice = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomIndex = Math.floor(Math.random() * 3);
    return computerChoice[randomIndex];
}

const playGame = (human, machine) => {
    console.log(`Human: ${human}, Machine: ${machine}`);

    if (human === machine) {
        result.innerHTML = "Deu empate!";
    }
    else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {

        result.innerHTML = "Você ganhou!";
        humanPoints++;
        humanScore.innerHTML = humanPoints;
    }
    else {
        computerPoints++;
        computerScore.innerHTML = computerPoints;
        result.innerHTML = "A máquina ganhou!";
    }
}

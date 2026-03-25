import { useRef, useState } from "react";
import "./App.css";
import dingSound from "./assets/Sounds/freesound_community-ding-101492.mp3"

function App(){

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");
  
 
  // Computer Choices
  const compChoices = ["Rock", "Paper","Scissors"]

  // Sounds
  const dingAudio = useRef(new Audio(dingSound)) ;

  // Generate a random choice for the computer
  function computerBrain(){

    // Choose randomly
    const randomIndex = Math.floor(Math.random() * compChoices.length);

    const choice = compChoices[randomIndex];

    setComputerChoice(choice);

    return choice;
  }

  // Determining the winner
  // Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. If both players choose the same option, it's a tie.
  function determineWinner( user, computer){

    if (user === "" || computer === "") {
      return "Please make a choice!";
    }

    if (user === computer) {
       return "It's a tie!";
    }

    if ( user === "Rock" && computer === "Scissors" ||
         user === "Scissors" && computer === "Paper" ||
         user === "Paper" && computer === "Rock"
      ) {
          setUserScore(prev => prev + 1);  
          return "You win!" ;
       } else {
          setComputerScore(prev => prev + 1);
         return "Computer wins!";
       }
  }


  // Handle User Click
  function handleChoice(choice){

    // user choice
    setUserChoice(choice);

    // Computer choice
    const compChoice = computerBrain();

    // Play sound
    dingAudio.current.play();

    // Outcome
    const outcome = determineWinner(choice, compChoice);
    setResult(outcome);
  }

   
  // Reset the game state to allow for a new round
  function resetGame(){
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setComputerScore(0);
    setUserScore(0);
  } 
  

  return(

    <div className="app_cont">

       <div className="app_content">

        <h1>ROCK PAPER SCISSORS</h1>

        {/* Scoreboard */}
        <div className="scoreboard">
            <p> You: {userScore} | Computer: {computerScore} </p>
        </div>

        {/* USER CHOICE */}
        <div className="app_btn">
          <button onClick={() => { handleChoice("Rock")}}>Rock 🪨</button>
          <button onClick={() => { handleChoice("Paper")}}>Paper 📜</button>
          <button onClick={() => { handleChoice("Scissors")}}>Scissors ✂️</button>
        </div>

        <p>You chose: <span>{userChoice}</span></p>

        {/* COMPUTER CHOICE */}
        <p>Computer chose: <span>{computerChoice}</span></p>

        {/* Result */}
        <p className="result"> {result} </p>

        <button id="reset_btn" onClick={resetGame}>Play Again</button>  

        
    </div>

    <footer>Monalisa 😎</footer>

    </div>

   


  )
}

export default App
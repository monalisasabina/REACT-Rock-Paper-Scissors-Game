import { useState } from "react";
import "./App.css";

function App(){

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const compChoices = ["Rock", "Paper","Scissors"]

  // Generate a random choice for the computer
  function computerBrain(){
    const randomIndex = Math.floor(Math.random() * compChoices.length);
    setComputerChoice(compChoices[randomIndex])
  }

  // Underrstand the game logic and determine the winner
  // Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. If both players choose the same option, it's a tie.
  function determineWinner(){

    if (userChoice === "" || computerChoice === "") {
      return "Please make a choice!";
    }

    if (userChoice === computerChoice) {
       return "It's a tie!";
    }


    if ( userChoice === "Rock" && computerChoice === "Scissors" ||
       userChoice === "Scissors" && computerChoice === "Paper" ||
       userChoice === "Paper" && computerChoice === "Rock" ) {
         return "You win!";
       } else {
         return "Computer wins!";
       }
  }

  // Reset the game state to allow for a new round
  function resetGame(){
    setUserChoice("");
    setComputerChoice("");
  } 
  

  return(

    <div className="app_cont">

       <div className="app_content">

        <h1>ROCK PAPER SCISSORS</h1>

        {/* USER CHOICE */}
        <div className="app_btn">
          <button onClick={() => { setUserChoice("Rock"); computerBrain(); }}>Rock 🪨</button>
          <button onClick={() => { setUserChoice("Paper"); computerBrain(); }}>Paper 📜</button>
          <button onClick={() => { setUserChoice("Scissors"); computerBrain(); }}>Scissors ✂️</button>
        </div>

        <p>You chose: <span>{userChoice}</span></p>

        {/* COMPUTER CHOICE */}
        <p>Computer chose: <span>{computerChoice}</span></p>

        {/* Result */}
        <p className="result"> {determineWinner()} </p>

        <button id="reset_btn" onClick={resetGame}>Play Again</button>  

        
    </div>

    <footer>Monalisa 😎</footer>

    </div>

   


  )
}

export default App
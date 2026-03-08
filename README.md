# Rock Paper Scissors (React)

A simple **Rock Paper Scissors** game built with **React**.  
The player selects Rock, Paper, or Scissors, and the computer randomly selects its move. The game then displays both choices.

This project is designed as a small practice application for understanding **React state management, event handling, and basic game logic**.

---

## Features

- Player selects **Rock**, **Paper**, or **Scissors**
- Computer generates a **random choice**
- Displays:
  - Player choice
  - Computer choice
- Built with **React functional components and hooks**

---

## Technologies Used

- **React**
- **JavaScript**
- **Vite**
- **CSS**

---

## Project Structure

```
rock-paper-scissors
|
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
```

---

## Installation

Clone the repository:

```
git clone https://github.com/your-username/rock-paper-scissors.git
```

Navigate into the project folder:

```bash
cd rock-paper-scissors
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```


Open the URL shown in the terminal to view the app in your browser.

---

## How the Game Works

1. The player clicks one of the buttons:
   - Rock
   - Paper
   - Scissors

2. The computer randomly selects a move from the same options.

3. The application updates the interface to show:
   - **You chose:** Player's move
   - **Computer chose:** Computer's move

---

## Example Interface

```bash
ROCK PAPER SCISSORS

[Rock] [Paper] [Scissors]

You chose: Rock
Computer chose: Paper
Result: You win!

[Play Again]
```

---

## Learning Objectives

This project demonstrates:

- Using the **useState** hook
- Handling **button click events**
- Managing **application state**
- Generating **random values in JavaScript**
- Updating the UI dynamically in React

---

## Possible Improvements

Future improvements could include:

- Adding **winner logic**
- Tracking **player and computer scores**
- Adding **game reset functionality**
- Improving **styling and layout**
- Adding **animations or icons**



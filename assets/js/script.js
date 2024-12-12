//EventListener 1) Wait for the DOM to finish loading before running the game
//EventListener 2) Get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button"); //return the 5 buttons as an array

  // Two ways to iterate through this array
  /**COMMON WAY --> for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
  }**/

  //Modern WAY (which does not use index notation)
  for (let button of buttons) {
    //console.log(button);
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") { //this. is the button that was just clicked!
        checkAnswer();
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    })
  }

  //Default game: addition
  runGame("addition");

})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
  // Create 2 random integers between 1 and 25 
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2); //if the game type is addition then display the Addition Question
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "subtract") {
    displaySubstractQuestion(num1, num2);
  } else {
    alert(`unknown game type : ${gameType}`); //if it is unkwnon, if there is an error, then alert the user
    throw `unknown game type : ${gameType}. Aborting!`; //throw is a JS keyword which will stop the game from running
  }
}

/** Checks the answer against the first element in
 * the returned calculateCorrectAnswer array * 
 */
function checkAnswer() {
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer(); // returns an array!
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    alert("Hey! You got it right! :D");
    incrementScore();
  } else {
    alert(`Sorry! the correct answer is ${calculatedAnswer[0]}!`);
    incrementWrongAnswer();
  }

  runGame(calculatedAnswer[1]); //This will create another addition question
}

/** Gets the operands (the numbers) and the operator ( + - etc)
 * directly from the DOM, and returns the correct answer
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").innerText); //innerText is to get the html text of the element.
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;

  if (operator === "+") {
    return [operand1 + operand2, "addition"]; // Will return AN ARRAY with two elements: result and game type (e.g [9, "addition"])
  } else if (operator === "x") {
    return [operand1 * operand2, "multiply"];
  } else if (operator === "-") {
    return [operand1 - operand2, "subtract"];
  } else {
    alert(`Unimplemented ${operator}`);
    throw `Unimplemented ${operator}. Aborting!`;
  }
}

/**Get the current score from the DOM and increments it by 1
 */
function incrementScore() {

  let oldScore = parseInt(document.getElementById("score").innerText); //Retrieve the old score 
  document.getElementById("score").innerText = ++oldScore; //wRITE IT BACK TO THE DOM! Note that .textContent can also be used!

}

/**Get the current wrong score from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;

}

/**Writes the Operands and Operator BACK to the DOM */
function displayAdditionQuestion(operand1, operand2) {

  document.getElementById("operand1").textContent = operand1; //textContent is the placeholder!!!
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";

}

/**Writes the Operands and Operator BACK to the DOM */
function displaySubstractQuestion(operand1, operand2) {

  document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById("operand2").textContent = operand2 > operand1 ? operand1 : operand2;
  document.getElementById("operator").textContent = "-";

}

/**Writes the Operands and Operator BACK to the DOM */
function displayMultiplyQuestion(operand1, operand2) {

  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";

}
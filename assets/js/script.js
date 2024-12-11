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
        alert("You clicked submit!"); //alert is a type of popup message
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
  } else {
    alert(`unknown game type : ${gameType}`); //if it is unkwnon, if there is an error, then alert the user
    throw `unknown game type : ${gameType}. Aborting!`; //throw is a JS keyword which will stop the game from running
  }
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1; //textContent is the placeholder!!!
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";

}

function displaySubstractQuestion() {

}

function displayMultiplyQuestion() {

}
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
        alert(`You clicked ${gameType}`);
      }
    })
  }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
  // Create 2 random integers between 1 and 25 
  let operand1 = Math.floor(Math.random() * 25) + 1;
  let operand2 = Math.floor(Math.random() * 25) + 1;

}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubstractQuestion() {

}

function displayMultiplyQuestion() {

}
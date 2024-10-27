// Run code when the page loads
document.addEventListener("DOMContentLoaded", function () {
 
   const squares = document.querySelectorAll("#board div"); // Find all the divs inside the element with id "board"
   let currentPlayer = "X"; // Track the current player
   const boardState = Array(9).fill(" "); // Array to keep track of each square
   const status = document.getElementById("status"); //div with the id "status"

   // Loop through each square (each div inside #board)
   squares.forEach((square, position) => {

       // Add the "square" class to each div so it gets the correct styles from the CSS
       square.classList.add("square");

       // Attach the click event listener to each square
       square.addEventListener("click", () => squareClick(position));

       // Add style effects using hover class
       square.addEventListener("mouseover", function () {
            if (!square.textContent) { // Only apply if square is empty
            square.classList.add("hover");
            }
        });
       
        // remove hover style effect
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover"); 
        });

   });

   // Clicking a square 
   function squareClick(position) {

       // Check if square is empty
       if (boardState[position]===" ") {

           //Assign square position
           const square = squares[position];

           //Add the current player's mark
           square.textContent = currentPlayer;

           // Add the class 'X' or 'O' to  the square
           square.classList.add(currentPlayer);

           // update the board state array
           boardState[position] = currentPlayer;
           
           if (winner(currentPlayer)) {
                status.textContent = "Congratulations! "+ currentPlayer +" is the Winner!"; // set status message
                status.classList.add("you-won"); // Add you-won class
                squares.forEach(square => square.removeEventListener("click",() => squareClick(position))); // Remove click event listeners
            } 
            else {
                //switch to other player
                currentPlayer= switchPlayer(currentPlayer);
            }
        }
    }

    // Switch to the other player
    function switchPlayer (currentPlayer) {     
       if (currentPlayer === "X") {
           currentPlayer = "O";

       } else {

           currentPlayer = "X";
       }
       return currentPlayer;
    }

    //Check for the winner
    function winner(currentPlayer) {
        //Array storing all possible winning combinations
        const winningCombos= [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal Left
            [2, 4, 6]  // Diagonal Right
        ];

        //Loop through combos check if player has won
        for (let i = 0; i < winningCombos.length; i++) {
            const combination = winningCombos[i];
            const [a, b, c] = combination;

            //Check if marks in the combination are the same
            if (boardState[a] === currentPlayer && boardState[b] === currentPlayer && boardState[c] === currentPlayer) {
                return true;   //player has winning combo
            }
        }
        return false; //player does not have winning combo
    };

});










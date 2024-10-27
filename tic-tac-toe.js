// Run code when the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Find all the divs inside the element with id "board"
   const squares = document.querySelectorAll("#board div"); 
   let currentPlayer = "X"; // Track the current player
   const boardState = Array(9).fill(" "); // Array to keep track of each square

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

           //switch to other player
           currentPlayer= switchPlayer(currentPlayer);
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
});



document.addEventListener("DOMContentLoaded", function () {
    // Select all div elements inside the board div
    const squares = document.querySelectorAll("#board div");
   
    // Loop through each square
    squares.forEach(square => {
        // Add the square class to each div
        square.classList.add("square");
    });
});     
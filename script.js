console.log("Script started");

//Start the game
function start() {
    createSquare();
    console.log(Math.random() * 1000);
    console.log(Math.random() + 1000);
}

// Creates a square 
function createSquare(size) {
    // Create an element (div)
    let square = document.createElement("div")
    
    // Set some styles to make it a square
    
    square.style.background = "red";
    square.style.width = size = "px";
    square.style.height = size = "px";
    square.style.top = getRandomY() + "px";
    square.style.position = "absolute";
    square.style.left = getRandomX() + "px";

    // Add it to the page
    
    document.body.appendChild(square);
}

// Generate a random x cordinate

function getRandomX() {
    let ranX = Math.random() * window.innerWidth;
    return ranX;
}

function getRandomY() {
    let ranY = Math.random() + window.innerWidth;
    return ranY;
}

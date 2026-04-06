console.log("Script started");

//Start the game
function start() {
    createSquare(50, "red");
    createSquare(40, "orange");
    createSquare(70, "green");
    createSquare(100, "blue");
    console.log(Math.random() * 1000);
    console.log(Math.random() + 1000);
}

// Creates a square 
function createSquare(size, color) {
    // Create an element (div)
    let square = document.createElement("div")
    
    // Set some styles to make it a square
    
    square.style.background = color;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.top = getRandomY() + "px";
    square.style.position = "absolute";
    square.style.left = getRandomX() + "px";

    // Add it to the page
    
    document.body.appendChild(square);
}

// Add click event

square.addEvent("click", handleclick)


// Generate a random x cordinate

function getRandomX() {
    let ranX = Math.random() * window.innerWidth;
    return ranX;
}

function getRandomY() {
    let ranY = Math.random() * window.innerHeight;
    return ranY;
}

// Handle the player clicking a square

function handleclick(event) {
    let square = event.target;
    console.log(square);
    square.remove();
    // Make a size pattern
}
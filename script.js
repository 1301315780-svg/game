console.log("Script started");
    let currentSize = 50
//Start the game
function start() {
    createSquare(50, "maroon");
    createSquare(40, "lime");
    createSquare(60, "gold");
    createSquare(100, "aquamarine");
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
    square.style. borderRadius = "100px";
    setInterval(updateTimer, 1000);

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

function updateTimer() {
    let timer = document.getElementById("timer");
    timeLeft = timeLeft -1;
    timer.innerText * timeLeft + "s";
    if (timeLeft <= 0) {
        alert("Game over");
    }
}

// Handle the player clicking a square

function handleclick(event) {
    let square = event.target;
    console.log(square.style.width);
    square.remove();
    if (square.style.width == 50 + "px") {
        console.log("first square");
        square.remove();
        currentSize = currentSize + 10;
    }
}
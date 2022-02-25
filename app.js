console.log("💩");

const grid = document.querySelector("#grid");
let DEFAULT_SIZE = 16;
const chosenColor = document.querySelector("#colorBox");
const colorBtn = document.querySelector("#colorBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const clearBtn = document.querySelector("#clearBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const sliderValue = document.querySelector(".slider-value");
const btns = document.querySelectorAll("button");
let eraseCheck = false;
let rainbowCheck = false;

colorBtn.addEventListener("click",colorCells);
eraseBtn.addEventListener("click",eraseCells);
rainbowBtn.addEventListener("click",rainbowCells);


function colorCells(e) {
  eraseCheck = false;
  rainbowCheck = false;
}

function rainbowCells(e) {
  rainbowCheck = true;
  eraseCheck = false;
  return rainbowCheck;
}

function eraseCells(e) {
  eraseCheck = true;
  rainbowCheck = false;
  let eraseColor = "#ededed";
  console.log("Erase board with " + eraseColor)
  // this.style.backgroundColor = currentColor;
  return eraseColor, eraseCheck;
}


sliderValue.innerHTML = DEFAULT_SIZE+" x "+DEFAULT_SIZE;


const rowInput = document.querySelector("#rows");
const colInput = document.querySelector("#cols");
const inputs = document.querySelectorAll(".inputs");

chosenColor.addEventListener("change",displayColor);



function displayColor(e) {
    let currentColor = chosenColor.value;
    console.log(`Your clothes are now ${currentColor}`);
    return currentColor;
}


// CLEAR GRID BUTTON

clearBtn.addEventListener("click", clearGrid);

function clearGrid(e) {
    while (grid.firstChild) {
        grid.firstChild.remove();
      }
      console.log("Cleared grid!");
      let inputs = document.querySelectorAll(".inputs");
      let rowInput = document.querySelector("#rows");
let colInput = document.querySelector("#cols");
          const rowValue = rowInput.value;
          const colValue = rowInput.value;
          DEFAULT_SIZE = rowValue;
          while (grid.firstChild) {
            grid.firstChild.remove();
          }
          makeRows(rowValue, colValue);
          // console.log(rowValue, colValue);
      console.log(`Now recreating one with ${rowValue, colValue} `);

}


// CREATE GRID 


function makeRows(rowInput, colInput) {
  console.log(`Generating ${rowInput} rows and ${colInput} cols`);
  DEFAULT_SIZE = rowInput;
  grid.style.setProperty("--grid-rows", rowInput);
  grid.style.setProperty("--grid-cols", colInput);
  for (c = 0; c < rowInput * colInput; c++) {
    let cell = document.createElement("div");

    grid.appendChild(cell).className = "grid-item";
  }
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mousedown", fillCells)
  );
}

// FILL CELLS WHILE DRAWING

function fillCells(e) {
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("click", colorGrid)
  );
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseenter", colorGrid)
  );
}

// RAINBOW COLOR

// STANDARD COLOR SELECTION

function colorGrid(e) {
  let eraseColor = "#ededed";
  console.log(rainbowCheck,eraseCheck,eraseColor,chosenColor.value);
  if (eraseCheck == true) {
    this.style.backgroundColor = eraseColor;
  } else if (rainbowCheck == true) {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } else {
    currentColor = chosenColor.value;
    this.style.backgroundColor = currentColor;
  };
  
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseup", stopColor)
  );
}




// STOP COLOR

function stopColor(e) {
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.removeEventListener("mouseenter", colorGrid)
  );
}



// UPDATE GRID SIZE

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    const rowValue = rowInput.value;
    const colValue = rowInput.value;
    while (grid.firstChild) {
      grid.firstChild.remove();
    }
    makeRows(rowValue, colValue);
    sliderValue.innerHTML = rowValue+" x "+rowValue;
    // console.log(rowValue, colValue);
  });
});

// INITIALIZE GRID

makeRows(DEFAULT_SIZE, DEFAULT_SIZE);


// TOGGLE BUTTONS


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
console.log("💩");

const grid = document.querySelector("#grid");
let DEFAULT_SIZE = 16;
const chosenColor = document.querySelector("#colorBox");
const colorBtn = document.querySelector("#colorBtn");
const clearBtn = document.querySelector("#clearBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const sliderValue = document.querySelector(".slider-value");
let eraseCheck = false;

eraseBtn.addEventListener("click",eraseCells);
colorBtn.addEventListener("click",colorCells);

function colorCells(e) {
  eraseCheck = false;
}

function eraseCells(e) {
  eraseCheck = true;
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

// STANDARD COLOR SELECTION

function colorGrid(e) {
  let eraseColor = "#ededed";
  console.log(eraseCheck,eraseColor,chosenColor.value);
  eraseCheck ? currentColor = eraseColor : currentColor = chosenColor.value;
  // let currentColor = chosenColor.value;
  this.style.backgroundColor = currentColor;
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

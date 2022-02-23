console.log("💩");

const grid = document.querySelector("#grid");

function makeRows(rowInput, colInput) {
  console.log(`Generating ${rowInput} rows and ${colInput} cols`);
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

function fillCells(e) {
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("click", colorGrid)
  );
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseenter", colorGrid)
  );
}

function colorGrid(e) {
  this.style.backgroundColor = "#000000";
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseup", stopColor)
  );
}

function stopColor(e) {
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.removeEventListener("mouseenter", colorGrid)
  );
}

const rowInput = document.querySelector("#rows");
const colInput = document.querySelector("#cols");
const inputs = document.querySelectorAll(".inputs");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    const rowValue = rowInput.value;
    const colValue = rowInput.value;
    while (grid.firstChild) {
      grid.firstChild.remove();
    }
    makeRows(rowValue, colValue);
    // console.log(rowValue, colValue);
  });
});

makeRows(16, 16);

const container = document.querySelector('#container');
let gridSize;

 

function createGrid() {
  container.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    const square = document.createElement('div')
  for (let row = 0; row < gridSize * gridSize ; row++) {
    const square = document.createElement('div'); 
    square.addEventListener('mouseover', colorChange);
    square.addEventListener('mousedown', colorChange)
    square.classList.add('square');
    container.appendChild(square);

  }
  return square;
}





const sketchbtn = document.querySelector('#sketchbtn');
const clearbtn = document.querySelector("#clearbtn")
sketchbtn.addEventListener('click', sizeReset)
clearbtn.addEventListener('click', sketchReset);






function sketchReset() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.setAttribute("style", "background-color:'transparent';")
  );
}


function sizeReset() {
  gridSize = prompt("Set your grid size: ", max = 100);
  
  if (gridSize > 100) {
    prompt("Maximum input exceeded!");
  } else if (gridSize<= 100){
    createGrid(gridSize);
  }
}



let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
 
function colorChange (e){
  if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black';
};



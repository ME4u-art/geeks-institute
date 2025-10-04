const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clearBtn');
const colors = document.querySelectorAll('.color');

let currentColor = 'black';
let mouseDown = false;


const rows = 24;
const cols = 61;
for (let i = 0; i < rows * cols; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);

  cell.addEventListener('mousedown', () => {
    cell.style.background = currentColor;
  });
  cell.addEventListener('mouseover', () => {
    if (mouseDown) cell.style.background = currentColor;
  });
}

document.body.addEventListener('mousedown', () => (mouseDown = true));
document.body.addEventListener('mouseup', () => (mouseDown = false));


colors.forEach(c => {
  c.addEventListener('click', () => {
    currentColor = c.style.backgroundColor;
  });
});


clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.style.background = 'white';
  });
});

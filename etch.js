let userInput;
let userWidth;
let numberSquares;

createContainer();



const boxButton = document.querySelector('#textBoxButton');
boxButton.addEventListener('click', () => {
    userInput = Number(document.getElementById('textBox').value);
    userWidth = 800/userInput + 'px';
    numberSquares = userInput*userInput;
    createGrid(numberSquares, userWidth);
    hover();

})

function createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    const body = document.querySelector('body')
    body.appendChild(container);
}

function destroyContainer() {
    const container = document.querySelector('.container');
    container.remove();
}

function createSquare(userWidth) {
    const square = document.createElement('div');
    square.classList.add('square');
    const containerRef = document.querySelector('.container');
    containerRef.appendChild(square);
    square.style.display = 'flex';
    square.style.flex = '1 1 auto'
    // square.style.width = '10.5px'
    square.style.width = userWidth;
    // square.style.border = '1px solid grey'
    square.style.backgroundColor = 'white'
}
function createGrid(numberSquares, userWidth) {
    destroyContainer();
    createContainer();
    for (let i = 0; i < numberSquares; i++) { //creates grid out of squares
        createSquare(userWidth);
    }
}



function hover() {
    const sqr = document.querySelectorAll('.square');
    sqr.forEach(item => {
    item.addEventListener('mouseover' , function(event) {
        event.target.style.backgroundColor = 'blue';
    })
});
}


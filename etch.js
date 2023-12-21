const container = document.querySelector('.container');



function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.style.display = 'flex';
    square.style.flex = '1 1 auto'
    // square.style.height = '48px'
    square.style.width = '10.5px'
    square.style.border = '1px solid grey'
    square.style.backgroundColor = 'white'

}
for (let i = 0; i < 4096; i++) { //creates 16x16 grid out of squares
    createSquare();
    
}


function hover() {
    
}
const sqr = document.querySelectorAll('.square');
sqr.forEach(item => {
    item.addEventListener('mouseover' , function(event) {
        event.target.style.backgroundColor = 'blue';
    })

});

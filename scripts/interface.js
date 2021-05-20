document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            if (playerTime == 0) {
                symbol0 = "🔰"
                alert("O jogo acabou! O vencedor foi " + symbol0)
            } else {
                symbol1 = "🤺"
                alert("O jogo acabou! O vencedor foi " + symbol1)
            }
        }, 20)
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


function reset() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol == '') {
            square.innerHTML = `<div class=''></div>`
        }
    })
}
function gameBoard(){
    // 3 x 3 square 
    size = 3;
    const board = [];

    for (let i=0; i<size; i++){
        board[i] = [];
        for (let j=0; j<size; j++){
            board[i].push('cell()')
        }
    };

    return board;
};

// console.log(gameBoard())

function player(){
    let score = 0;

    const player1 = "Player One";
    const player2 = "Player Two";

    const players = [
        {
            name: player1,
            token: 'x',
        },
        {
            name: player2,
            token: 'o',

        }
    ];

    return players;
};

const player1 = player()[0];
const player2 = player()[1];

console.log(player2);

function game(){

};

// const {row1} = gameBoard();
// console.log(row1[0]);
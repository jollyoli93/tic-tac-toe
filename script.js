function gameBoard(){
    // 3 x 3 square 
    size = 3;
    const board = [];

    for (let i=0; i<size; i++){
        board[i] = [];
        for (let j=0; j<size; j++){
            board[i].push("")
        }
    };

    const updateBoard = (index, token)=>{
        let [i,j] = index;
        board[i][j] = token;
    };

    const getBoard = ()=> board;

    return {getBoard, updateBoard};
};

function player(name){
    const player1 = "Player One";
    const player2 = "Player Two";

    const players = [
        {
            name: player1,
            token: 'x',
            score: 0,
        },
        {
            name: player2,
            token: 'o',
            score: 0,
        }
    ];
    return players;
};

function gameController(){
    const player1 = player()[0];
    const player2 = player()[1];
    const board = gameBoard().board;

    // player1 goes first
    board
};

const game = gameController();

const indexes = [0, 1];
const token = "x";
const [i,j] = indexes;

const board = gameBoard();

board.updateBoard([0, 0], "x")
board.updateBoard([0, 1], "o")

console.log(board.getBoard());
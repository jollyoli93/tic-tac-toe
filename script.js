const container = document.querySelector('.container');
const resetBtn = document.querySelector('#resetBtn')
const winner = document.querySelector('#winner');
const player1score = document.getElementById('player1-score');
const player2score = document.getElementById('player2-score');
let gameOver = false;

const boardDisplay = function(){for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){const board = document.createElement('div');
        board.setAttribute("class", 'board');
        board.setAttribute("value", `${i}${j}`);
         board.textContent = ".";

        container.appendChild(board);
    }}
}();


function gameBoard(){
    // 3 x 3 square 
    const size = 3;
    const board = [];

    for (let i=0; i<size; i++){
        board[i] = [];
        for (let j=0; j<size; j++){
            board[i].push("")
        }
    };

    const updateBoard = (index, token)=>{
        let [i,j] = index;

        if( board[i][j] === ""){
            board[i][j] = token;
            return board;
        } else {
            return false;
        };
    };

    const getBoard = ()=> board;

    return {getBoard, updateBoard};
};


function player(){
    const player1 = "X";
    const player2 = "O";

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


function winCondition(board){
    const checkStraights = (function(){
        let rows = [];
        let columns = [];

        {for(let i=0; i<3; i++){
            rows.push(board[i][0], board[i][1], board[i][2]);
            columns.push(board[0][i], board[1][i], board[2][i]);

            if (rows.every((token) => token === 'x') ||
                rows.every((token) => token === 'o')){
                gameOver = true;


            } if (columns.every((token) => token === 'x') ||
                        columns.every((token) => token === 'o')){
                    
                gameOver = true;

            } else {
                return false;
            }};
        };
    })();


    const checkDiagonals = (function(){
        const diagonal01 = [board[0][0], board[1][1], board[2][2]];
        const diagonal02 = [board[0][2], board[1][1], board[2][0]];    

        if (diagonal01.every((token) => token === 'x') || 
            diagonal01.every((token) => token === 'o') ){
            gameOver = true;

        } if (diagonal02.every((token)=>token === 'x') ||
                    diagonal02.every((token) => token === 'o')){
            gameOver = true;

        } else {
            return false};
    })();


};


function gameController(){
    const boardVisual = document.querySelectorAll('.board');
    const board = gameBoard();
    const player1 = player()[0];
    const player2 = player()[1];
    player1score.textContent = player1.score;
    player2score.textContent = player2.score;

    let turns = 0;
    currentPlayer = player1;


    function initializeGame(){
        boardVisual.forEach(square => square.addEventListener("click", squareClicked))
        // resetBtn.addEventListener("click", resetButton)
        winner.textContent = `${currentPlayer.name}'s Turns`
    };

    function squareClicked(){
        const coords = this.getAttribute("value")
        this.textContent = currentPlayer.token;
        let newBoard = board.updateBoard(coords, currentPlayer.token);
        winCondition(newBoard);
        console.log(gameOver);
        checkWinner();
    };

    function changePlayer(){
        if(currentPlayer === player1){
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    };

    function checkWinner(){
        if (gameOver){
            winner.textContent = `${currentPlayer.name} is the winner!`
            currentPlayer.score += 1;
        } else if (turns === 8){
            winner.textContent = "it's a draw"
        } else {
            changePlayer();
            winner.textContent = `${currentPlayer.name}'s Turns`;
            turns += 1;
        }
    }
    
    // function resetButton(){
    //     for (let i=0; i<3; i++){
    //         board[i] = [];
    //         for (let j=0; j<3; j++){
    //             board[i].push("")
    //             boardVisual.textContent = "."
    //         }
    //     };
    // }


    initializeGame();

};

gameController();

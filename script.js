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
        // check if game is not won
        if (winCondition() === false);
        // check if index is empty
        if(board[i][j] === ""){
            board[i][j] = token;
        };
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


function winCondition(){
    // set condition logic for win
    return false;
}


function gameController(){
    const player1 = player()[0];
    const player2 = player()[1];
    const board = gameBoard().board;

    // player1 goes first
    // while game not won then update play this function to update board.upadteBoard()
    function play(player1, selection){    
        board.updateBoard(selection, player1.token)
    };

    while(winCondition()===true){
        // do something
    }
};

const game = gameController();
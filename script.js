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
        // check if game is not won
        // if (winCondition() === false);
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
    const boardFunc = gameBoard();
    const board = boardFunc.getBoard();
    let counter = [];

    let counterFlag = false;
    if (counter.length === 3) counterFlag = true;

    boardFunc.updateBoard([1,0], 'x');
    boardFunc.updateBoard([1,1], 'x');
    boardFunc.updateBoard([1,2], 'x');

    // if board[0][0] board[0][1] board[0][2] === 'x' or 'o' return token

    for (let i=0; i<3; i++){
        for (let j=0; i<3; i++){
            if (counterFlag === false &&
                (board[i][j] === 'x'  ||
                 board[i][j] === 'o') &&
                (board[i][j+1] === board[i][j])
                ){
                counter.push(board[i][j]);
                }; 
            };
        };
    return console.log(counterFlag, counter.length);
};

winCondition();


function gameController(){
    const player1 = player()[0];
    const player2 = player()[1];
    const board = gameBoard().getBoard();

    // player1 goes first
    // while game not won then update play this function to update board.upadteBoard()
    function play(player1, selection){    
        board.updateBoard(selection, player1.token)
    };

    while(winCondition()===true){
        // do something
    }
};

// const game = gameController();
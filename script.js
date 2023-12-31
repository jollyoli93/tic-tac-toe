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
        if( board[i][j] === ""){
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

    //debugging
    boardFunc.updateBoard([0,0], 'x');
    boardFunc.updateBoard([1,1], 'x');
    boardFunc.updateBoard([2,2], 'x');

    // if board[0][0] board[0][1] board[0][2] === 'x' or 'o' return token
    const checkStraights = (function(){
        let rows = [];
        let columns = [];
        let flag = false;

        {for(let i=0; i<3; i++){
            rows.push(board[i][0], board[i][1], board[i][2]);
            columns.push(board[0][i], board[1][i], board[2][i]);

            if (rows.every((token) => token === 'x') ||
                rows.every((token) => token === 'o')){

                const winningRow = i;
                const winningToken = board[i][0];

                return {winningRow, winningToken};

            } else if (columns.every((token) => token === 'x') ||
                        columns.every((token) => token === 'o')){

                const winningColumn = i;
                const winningToken = board[i][0];

                return {winningColumn, winningToken};
            }};
        };
    })();


    const checkDiagonals = (function(){
        const diagonal01 = [board[0][0], board[1][1], board[2][2]];
        const diagonal02 = [board[0][2], board[1][1], board[2][0]];    

        if (diagonal01.every((token) => token === 'x') || 
            diagonal01.every((token) => token === 'o') ){
            const winningDiag01 = [0, 1, 2];
            const winningToken = [board[0][0]];
            return {winningDiag01, winningToken}

        } else if (diagonal02.every((token)=>token === 'x') ||
                    diagonal02.every((token) => token === 'o')){
                        const winningDiag02 = [2, 1, 0];
                        const winningToken = [board[1][1]];
                        return {winningDiag02, winningToken}  
        } else {
         return "Nothing"
        }
    })();

    console.log(checkDiagonals);
    // return {checkStraights, checkDiagonals}
};

console.log(winCondition());



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

const game = gameController();

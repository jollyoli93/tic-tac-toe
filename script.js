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

    //testing
    boardFunc.updateBoard([0,0], 'o');
    boardFunc.updateBoard([1,0], 'o');
    boardFunc.updateBoard([2,0], 'o');

    // if board[0][0] board[0][1] board[0][2] === 'x' or 'o' return token
    function checkRows(){
        let rows = [];
        let flag = false;

        while(flag === false)
            {for(let i=0; i<3; i++){
                rows.push(board[i][0], board[i][1], board[i][2]);

                if (rows.every((token) => token === 'x') ||
                    rows.every((token) => token === 'o')){
                    flag = true;
                    const winningRow = `Row ${i+1}`;
                    const winningToken = board[i][0];

                    return {winningRow, winningToken};

                } else {
                    rows = [];
                }
            };
        };
    };        

    function checkColumns(){
        let columns = [];
        let flag = false;

        while(flag === false)
            {for(let i=0; i<3; i++){
                columns.push(board[0][i], board[1][i], board[2][i]);

                if (columns.every((token) => token === 'x') ||
                columns.every((token) => token === 'o')){
                    flag = true;
                    const winningColumn = `Column ${i+1}`;
                    const winningToken = board[i][0];

                    return {winningColumn, winningToken};

                } else {
                    columns = [];
                }
            };
        };
    };

    // function checkDiagonals(){
        let diagonals = [];
        let flag = false;

        while(flag === false)
            {for(let i=0; i<3; i++){
                diagonals.push(board[0][i], board[1][i], board[2][i]);

                if (diagonals.every((token) => token === 'x') ||
                diagonals.every((token) => token === 'o')){
                    flag = true;
                    const winningDiagonal = `Column ${i+1}`;
                    const winningToken = board[i][0];

                    return {winningDiagonal, winningToken};

                } else {
                    diagonals = [];
                }
            };
        };
    // };

    return {checkRows, checkColumns};
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

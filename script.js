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

        if( i<3 && j<3 &&
            board[i][j] === ""){
            board[i][j] = token;
            return board;
        } else {
            return false;
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


function winCondition(board){
    // //debugging
    // boardFunc.updateBoard([0,0], 'o');
    // boardFunc.updateBoard([0,1], 'x');
    // boardFunc.updateBoard([0,2], 'x');

    // if board[0][0] board[0][1] board[0][2] === 'x' or 'o' return token
    const checkStraights = (function(){
        let rows = [];
        let columns = [];

        {for(let i=0; i<3; i++){
            rows.push(board[i][0], board[i][1], board[i][2]);
            columns.push(board[0][i], board[1][i], board[2][i]);

            if (rows.every((token) => token === 'x') ||
                rows.every((token) => token === 'o')){

                return true;

            } else if (columns.every((token) => token === 'x') ||
                        columns.every((token) => token === 'o')){

                return true;
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
            // const winningDiag01 = [0, 1, 2];
            // const winningToken = [board[0][0]];

            return true;

        } else if (diagonal02.every((token)=>token === 'x') ||
                    diagonal02.every((token) => token === 'o')){
            // const winningDiag02 = [2, 1, 0];
            // const winningToken = [board[1][1]];

            return true; 
        } else {
            return false};
    })();

    console.log(checkDiagonals, checkStraights);

    // logic to return the winning move
    return checkDiagonals ? true
        :checkStraights ? true
        : false;
};



function gameController(){
    const player1 = player()[0];
    const player2 = player()[1];
    const board = gameBoard();

    // // player1 goes first
    // // while game not won then update play this function to update board.upadteBoard()
    // function play(player, selection){    
    //     board.updateBoard(selection, player.token)
    // };

    let player1Selection = '';

    let win = true;
    let turns = 0;

    while(win){
        player1Selection = prompt('enter');
        newBoard = board.updateBoard(player1Selection, player1.token);

        if(newBoard != false){
            if (winCondition(newBoard)===true){
            win = false;
            console.log(player1.token);
            }
            else if (turns >=4){
                return "Out of turns";          
            }
            else {
                continue;
            };}
    };

};  
gameController();

const container = document.querySelector('.container');

// //Set up board in DOM
// for(let i=0; i<9; i++){
//     const square = document.createElement('div');
//     square.setAttribute("class", 'board');
//     square.setAttribute("value", `${i}`);

//     square.textContent = `${i}`

//     container.appendChild(square);
// };

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

            return true;

        } else if (diagonal02.every((token)=>token === 'x') ||
                    diagonal02.every((token) => token === 'o')){

            return true; 
        } else {
            return false};
    })();

    return checkDiagonals ? true
        :checkStraights ? true
        : false;
};


function gameController(){
    const board = gameBoard();
    const players = player();

    let turns = 0;
    let playerWon = false;
    let winMessage = '';

    while(playerWon === false){        
        for(let person of players){

            //debugging
            // playerSelection = prompt('enter');
            newBoard = board.updateBoard(playerSelection, person.token);

            if (winCondition(newBoard)===true){
                person.score += 1;
                playerWon = true;
                winMessage = `The winner is ${person.token}`;

                return winMessage;

            } else if(turns >= 8){
                playerWon = true;
                winMessage = "It's a Draw";

                return winMessage;     

            } else {
                turns += 1;
            };
        };
    };
    return winMessage;
};  


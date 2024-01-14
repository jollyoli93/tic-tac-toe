const container = document.querySelector('.container');
let gameOver = false;
let turns = 0;

//Set up board in DOM
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){const board = document.createElement('div');
        board.setAttribute("class", 'board');
        board.setAttribute("value", `${i}${j}`);
        board.textContent = `o`;

        container.appendChild(board);}
};

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
                    gameOver = true;
                return "rows";

            } else if (columns.every((token) => token === 'x') ||
                        columns.every((token) => token === 'o')){
                    
                            gameOver = true;
                return "col";
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
            return "diag 1";

        } else if (diagonal02.every((token)=>token === 'x') ||
                    diagonal02.every((token) => token === 'o')){
                        gameOver = true;
            return "Diags 2"; 
        } else {
            return false};
    })();


};


function gameController(){
    const boardVisual = document.querySelectorAll('.board');
    const board = gameBoard();
    const player1 = player()[0];
    const player2 = player()[1];


    //player 1 turn
    if (turns % 2 === 0 && !gameOver){
        for(let square of boardVisual){
            square.addEventListener("click", ()=>{
                coords = square.getAttribute("value")
                square.textContent = player1.token;
                newBoard = board.updateBoard(coords, player1.token);
                winCondition(newBoard);
                console.log(gameOver, newBoard)
            }
        )}
    }

    // if (gameOver){
    //     player1.score += 1;
    //     winMessage = `The winner is ${player1.token}`;

    //     return winMessage;

    // } else if(!gameOver && turns >= 8){
    //     winMessage = "It's a Draw";

    //     return winMessage;     

    // } else {
    //     updateVisual(player1.token);
    //     console.log(board);
    //     console.log(gameOver);
    //     turns += 1;
    // };
};

function updateVisual(token){
    let game = gameBoard();

    for(let square of board){
        square.addEventListener("click", ()=>{
            square.textContent = token;
            coord = square.getAttribute("value")
            let newBoard = game.updateBoard(coord, token);
            winCondition(newBoard);
            console.log(newBoard);
        });
    }
};

gameController();

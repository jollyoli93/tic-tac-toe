const startGame = function(){
    
    const container = document.querySelector('.container');
    const gameOver = false;
    let turns = 0;

    //Set up board in DOM
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){const board = document.createElement('div');
            board.setAttribute("class", 'board');
            board.setAttribute("value", `${i}${j}`);
            board.textContent = `X`;

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

        const getBoard = ()=> board;

        return getBoard;
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

    function declareWinner(token){
        gameOver = true;
        return `${token} wins`
    };

    function declareDraw(){
        return "It's a draw"
    };


    function winCondition(index, token){
        const board = gameBoard().getBoard;

        const checkStraights = function(){
            let rows = [];
            let columns = [];

            {for(let i=0; i<3; i++){
                rows.push(board[i][0], board[i][1], board[i][2]);
                columns.push(board[0][i], board[1][i], board[2][i]);

                if (rows.every((token) => token === 'x') ||
                    rows.every((token) => token === 'o')){
                    
                    gameBoard = true;
                    return token;

                } else if (columns.every((token) => token === 'x') ||
                            columns.every((token) => token === 'o')){
                    
                    gameBoard = true;
                    return token;
                } else {
                    return false;
                }};
            };
        };


        const checkDiagonals = function(){
            const diagonal01 = [board[0][0], board[1][1], board[2][2]];
            const diagonal02 = [board[0][2], board[1][1], board[2][0]];    

            if (diagonal01.every((token) => token === 'x') || 
                diagonal01.every((token) => token === 'o') ){

                    gameBoard = true;
                    return token;

            } else if (diagonal02.every((token)=>token === 'x') ||
                        diagonal02.every((token) => token === 'o')){
                  
                    gameBoard = true;
                    return token; 
            } else {
                return false};
        };

        const updateBoard = (token, ...index)=>{
            let i,j = index;
            if( board[i][j] === ""){
                board[i][j] = token;
                return board;
            };
        };
        
        if (gameBoard === true){
            return declareWinner();
        }
        else if(!gameBoard){
            checkDiagonals();
            checkStraights();
        }
        else if (turns === 9 && !gameBoard){
            return declareDraw();
        }
        else {
            updateBoard(index, token);
            turns += 1;
        };

        console.log(board.getBoard(), checkStraights(), checkDiagonals());
    
    }


    function updateVisual(token){
        let game = gameBoard();
        const board = document.querySelectorAll('.board');

        for(let square of board){
            square.addEventListener("click", ()=>{
                square.textContent = token;
                coord = square.getAttribute("value")
                let newBoard = game.updateBoard(coord, token);
            });
        }};


    function gamePlay(){
        winCondition('x', '10');
    };

    gamePlay();


}();
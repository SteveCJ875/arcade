

const gameState = { 
    players: [ `x` , `o`],
    playerNames: [``,``],
    board: [
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ],
    currentPlayerIndex: 0,
    
}


function renderBoard(){
    const board = $(`div.board`)

    board.html(``)

    gameState.board.forEach(function (row, rowIndex) {
        row.forEach(function (cellValue, cellIndex){

            let cellId = `${rowIndex}-${cellIndex}`;

            const  cellElement = $(`<div class="cell" id="${cellId}"><span>${cellValue || ''}</span></div>`)
            //store data '.data' pass keys or values
            cellElement.data(`row`, rowIndex)
            cellElement.data(`cell`, cellIndex)
            board.append (cellElement)
        })
    })

    for(let rowIndex=0;rowIndex<3;rowIndex++){
        for(let cellIndex=0;cellIndex<3;cellIndex++){
            let cellId = `${rowIndex}-${cellIndex}`;
            $(`#${cellId}`).on(`click`,function(e){
                   handleCellClick(e, rowIndex, cellIndex); 
            })
        }
    }
}

//make a function that puts player's name into span//
function insertName1(){
    let playerSpan1 = $(`.Player1`)
    let playerInput1 = $(`input.button1`)
    
    playerInput1.on(`input`,function(){
        gameState.playerNames[0] = ($(this).val())
        playerSpan1.text(gameState.playerNames[0])
        return playerSpan1
    })
}

function insertName2(){
    let playerSpan2 = $(`.Player2`)
    let playerInput2 = $(`input.button2`)
    
    playerInput2.on(`input`,function(){
        gameState.playerNames[1]= ($(this).val())
        playerSpan2.text(gameState.playerNames[1])
        return playerSpan2
    })
}

//this creates a X//
//

function handleCellClick(event, rowIndex, cellIndex){

    if(gameState.board[rowIndex][cellIndex] == null ){
        gameState.board[rowIndex][cellIndex] = gameState.players[gameState.currentPlayerIndex];
        changeTurn();
        renderBoard();
        if(checkWin()){
            //do something
            alert("We; have a winner")
            console.log(gameState)
        } else if(checkDraw()){
            alert(`We have a draw`)
        }
    }

}

renderBoard()
//this creates an O//

renderBoard()



//generates turn//


function changeTurn(){
    if (gameState.currentPlayerIndex === 0)
        gameState.currentPlayerIndex = 1
    else 
        gameState.currentPlayerIndex = 0
} 




gameState.currentPlayerIndex = Math.round(Math.random())
function updateGame (){
    return gameState
}
console.log(gameState.board.data)

function checkWin(){

    for(let rowIndex=0;rowIndex<3;rowIndex++){
        if(gameState.board[rowIndex][0] != null &&
            gameState.board[rowIndex][0] == gameState.board[rowIndex][1] && 
            gameState.board[rowIndex][1] == gameState.board[rowIndex][2]){
                console.log(`column win`)
                return true;
                
            }
    }

    for(let cellIndex=0;cellIndex<3;cellIndex++){
        if(gameState.board[0][cellIndex] != null &&
            gameState.board[0][cellIndex] == gameState.board[1][cellIndex] && 
            gameState.board[1][cellIndex] == gameState.board[2][cellIndex]){
                console.log(`row win`)
                return true;
            }
    }

    if(
        gameState.board[0][0] != null &&
        gameState.board[0][0] == gameState.board[1][1] && 
        gameState.board[1][1] == gameState.board[2][2]){
            return true;
    }
    if( gameState.board[0][2] != null &&
        gameState.board[0][2] == gameState.board[1][1] && 
        gameState.board[1][1] == gameState.board[2][0]){
            return true;
    }

    return false;

}

function checkDraw(){
    
    for(let rowIndex=0;rowIndex<3;rowIndex++){
        for(let cellIndex=0;cellIndex<3;cellIndex++){
            if(gameState.board[rowIndex][cellIndex] == null){
                return false;
            }
        }
    }
    return true;
}

function checkHorizonal(row) {
    let first = gameState.board[row][0];
    let second = gameState.board[row][1];
    let third = gameState.board[row][2];
    
    if (first === second && second === third) {
        return first;
    } // either return 'x', 'o', null
    
    return null // else return null
} // if checkHorizontal returns 'x' or 'o', that's our winner!
// else, there's no winner in a horiz...

// checkHorizonal(0) || checkHorizonal(1) || checkHorizontal(2)
// this will be 'x' if any of them are 'x', and 'o' if any of them are 'o'
// and null ONLY if all 3 are null...


function checkVertical1(column) {
    let first = gameState.board[0][column];
    let second = gameState.board[1][column];
    let third = gameState.board[2][column];
    
    if (first === second && second === third) {
        return first;
    } }
    
    
    renderBoard()
    renderBoard()
    insertName1()
    insertName2()
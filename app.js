

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
//this creates a X//
function makeX(){
    $('div.cell').click(function (){
    
        const targetElement = $(this);

        targetElement.find(`span`).text(gameState.players[gameState.currentPlayerIndex])

    })

}
//this creates an O//
function makeO(){
    $('div.cell').click(function (){
    
        const targetElement = $(this);

        targetElement.find(`span`).text('O')

    })

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



//generates turn//


function turnAssign(){
    if (gameState.currentPlayerIndex === 0)
        gameState.currentPlayerIndex = 1
    else 
        gameState.currentPlayerIndex = 0
} 

    


gameState.currentPlayerIndex = Math.round(Math.random())
insertName1()
insertName2()
function updateGame (){
    return gameState
}
console.log(gameState.board.data)


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
    

    turnAssign()
    makeX()
    makeO()
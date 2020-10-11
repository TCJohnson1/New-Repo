$(() => {
//Establishing variables


//Establishing game board
const $gameBoard = $('.gameBoard');

//Accessing 'How To Play' button
const $openBtn = $('#openWelcome');

//Accessing pop up window
const $welcome = $('#welcome');

//Accessing the close button of pop up
const $closeBtn = $('#close');

//Accessing refresh button
// const $resetBtn = $('#reset');

//Accessing individual board pieces //=============> Play a piece no good <============\\
const $circle = $('.circle');

// Event handler for pop up window
const openWlecome = () => {
    $welcome.css('display', 'block');
}

//Event handler for closing pop up window
const closeWelcome = () => {
    $welcome.css('display', 'none');
}

//Event handler for refresh button  //====> not needed with HTML reset button <====\\
// const refreshPage = () => {
//     $resetBtn.click(function(){
//         location.reload(true)
//     })
// }

// Function to click the board pieces //=============> Play a piece no good <============\\
//Established a variable 'playMove' to play a move where clicked on the board
$circle.on('click', (e) => playMove(e))
// const $circle = document.querySelectorAll("div.class")
// const playMove = () => {

// $gameBoard.

// Function for dropping pieces. Loop through the spaces in the column and check if the one below is free

//IDS NEED TO BE RENAMED TO MATCH THE INDEX IN CIRCLES. SO RENUMBER BY COLUMN
const slide = (color, column) => {
    for (let i = 0; i < 7; i++) {
        if (!$circle[i + column * 7].classList.contains('red') && !$circle[i + column * 7].classList.contains('black')) {
            setTimeout(() => {

            $($circle[i + column * 7]).css('background-color', color).addClass(color)
            toggle()
            }, 500);
        } else {
            return
        }
        

}
}
let choice = true
function toggle(){
    choice = choice ? false : true
}
function playMove(event) {
    let $move = $(event.target)
        if (choice === true) {
            slide('black', 0)
        }   else {
            slide('red', 0)
        }
        checkWinners();
        console.log($move.attr('id'))
}

function checkWinners() {
    const winningArrays = [
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41], [2, 10, 18, 26], [10, 18, 26, 34], [3, 11, 19, 27], [21, 15, 9, 3], [28, 22, 16, 10], [22, 16, 10, 4], [35, 29, 23, 17], [29, 23, 17, 11], [23, 17, 11, 5], [36, 30, 24, 18], [30, 24, 18, 12], [24, 18, 12, 6], [37, 31, 25, 19], [31, 25, 19, 13], [38, 32, 26, 20], [14, 22, 30, 38], [7, 15, 23, 31], [15, 23, 31, 39], [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40]
    ]
    //Check for a winning array 
    for (let y =0; y < winningArrays.length; y++) {
        const check1 = $($circle[winningArrays[y][0]])
        const check2 = $($circle[winningArrays[y][1]])
        const check3 = $($circle[winningArrays[y][2]])
        const check4 = $($circle[winningArrays[y][3]])
        if (check1.hasClass('red') && check2.hasClass('red') && check3.hasClass('red') && check4.hasClass('red')) {
            alert('Red wins!')
        } else if (check1.hasClass('black') && check2.hasClass('black') && check3.hasClass('black') && check4.hasClass('black')) {
            alert('Black wins!')
        }
    }
// console.log($circle)
}

// Event listener for the 'How To Play' button
$openBtn.on('click', openWlecome);  

//Event listener for closing pop up
$closeBtn.on('click', closeWelcome);

//Event listener for playing an individual piece //==========> Play a piece no good <==========\\
// $circle.on('click', playMove)

// $resetBtn.on('click', refreshPage)

console.log($circle)

});

//Make a function that checks all horizontal arrays for a match

// const hWin = [[0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41]];


// //Make a function that checks all vertical arrays for a match

// const vWin = [[0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41]];

// //Make a function that checks all diagonal arrays for a match

// const dWin = [[1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41], [2, 10, 18, 26], [10, 18, 26, 34], [3, 11, 19, 27], [21, 15, 9, 3], [28, 22, 16, 10], [22, 16, 10, 4], [35, 29, 23, 17], [29, 23, 17, 11], [23, 17, 11, 5], [36, 30, 24, 18], [30, 24, 18, 12], [24, 18, 12, 6], [37, 31, 25, 19], [31, 25, 19, 13], [38, 32, 26, 20], [14, 22, 30, 38], [7, 15, 23, 31], [15, 23, 31, 39], [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40]];

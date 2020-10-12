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

//Accessing selector row
const $chip = $('.topChip');

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
    console.log(color)
    for (let i = 0; i < 6; i++) {
        if (!$circle[i + column * 6].classList.contains('red') && !$circle[i + column * 6].classList.contains('black')) {
            setTimeout(() => {
            if (i > 0){
            $($circle[i + column * 6-1]).removeClass(color)
            }
            $($circle[i + column * 6]).addClass(color)
            // toggle()
            }, 500);
        } else {
            // return
        }
        

}
    toggle()
}
let choice = true
function toggle(){
    choice = choice ? false : true
    console.log(choice)
}

function playMove(event) {
    let columnNumber = parseInt(event.target.id)
        if (choice === true) {
            slide('black', Math.floor(columnNumber/6)) 
        }   else {
            slide('red', Math.floor(columnNumber/6))
        }
        checkWinners();
        // console.log($move.attr('id'))
}
//Winning arrays need to be updated
function checkWinners() {
    const winningArrays = [
        [0, 6, 12, 18], [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36], [1, 7, 13, 19], [7, 13, 19, 25], [13, 19, 25, 31], [19, 25, 31, 37], [2, 8, 14, 20], [8, 14, 20, 26], [14, 20, 26, 32], [20, 26, 32, 38], [3, 9, 15, 21], [9, 15, 21, 27], [15, 21, 27, 33], [21, 27, 33, 39], [4, 10, 16, 22], [10, 16, 22, 28], [16, 22, 28, 34], [22, 28, 34, 40], [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35], [23, 29, 35, 41], [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [6, 7, 8, 9], [7, 8, 9, 10], [8, 9, 10, 11], [12, 13, 14, 15], [13, 14, 15, 16], [14, 15,16, 17], [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23], [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29], [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], [3, 8, 13, 18], [4, 9, 14, 19], [9, 14, 19, 24], [5, 10, 15, 20], [10, 15, 20, 25], [15, 20, 25, 30], [11, 16, 21, 26], [16, 21, 26, 31], [21, 26, 31, 36], [17,22, 27, 32], [22, 27, 32, 37], [23, 28, 33, 38], [2, 9, 16, 23], [1, 8, 15, 22], [8, 15, 22, 29], [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], [12, 19, 26, 33], [19, 26, 33, 40], [18, 25, 32, 39]
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
            alert('Black Wins!')
        }
    }
// console.log($circle)
}

// Event listener for the 'How To Play' button
$openBtn.on('click', openWlecome);  

//Event listener for closing pop up
$closeBtn.on('click', closeWelcome);

/////////Need to be established for dropping top chip////////////////////
/////////////////////////////////////////////////////////////////////////
//Event listener for top chip hovering
$chip.on('mouseover', )


//Event listener for top chip drop
$chip.on('click', )
/////////////////////////////////////////////////////////////////////////


console.log($circle)

});

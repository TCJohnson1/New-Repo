$(() => {
//Accessing 'About the Game' button
const $openBtn = $('#openWelcome');

//Accessing pop up window
const $welcome = $('#welcome');

//Accessing the close button of pop up
const $closeBtn = $('#close');

//Accessing individual board pieces
// const $circle = $('.circle');

// Event handler for pop up window
const openWlecome = () => {
    $welcome.css('display', 'block');
}

//Event handler for closing pop up window
const closeWelcome = () => {
    $welcome.css('display', 'none');
}

// Function to click the board pieces
// const playMove = () => {
//     $circle.css('display', 'block')
// }

// Event listener for the 'About the Game' button
$openBtn.on('click', openWlecome);

//Event listener for closing pop up
$closeBtn.on('click', closeWelcome);

//Event listener for playing an individual piece
$circle.on('click', playMove)



});
$(() => {
//Accessing 'How To Play' button
const $openBtn = $('#openWelcome');

//Accessing pop up window
const $welcome = $('#welcome');

//Accessing the close button of pop up
const $closeBtn = $('#close');

//Accessing refresh button
const $resetBtn = $('#reset');

//Accessing individual board pieces //=============> Play a piece no good <============\\
// const $circle = $('.circle');

// Event handler for pop up window
const openWlecome = () => {
    $welcome.css('display', 'block');
}

//Event handler for closing pop up window
const closeWelcome = () => {
    $welcome.css('display', 'none');
}

//Event handler for refresh button
const refreshPage = () => {
    $resetBtn.click(function(){
        location.reload(true)
    })
}

// Function to click the board pieces //=============> Play a piece no good <============\\
// const playMove = () => {
//     $circle.css('display', 'block')
// }

// Event listener for the 'How To Play' button
$openBtn.on('click', openWlecome);  

//Event listener for closing pop up
$closeBtn.on('click', closeWelcome);

//Event listener for playing an individual piece //==========> Play a piece no good <==========\\
// $circle.on('click', playMove)

$resetBtn.on('click', refreshPage)


});
$(document).ready(function() {


//Event Handlers
$("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #point").on("click", captureInput);
$("#allClear").on("click", clearInput);
$("#plusMinus").on("click", reverseSign);
$("#add").on("click", performAddition);
$("#subtract").on("click", performSubtraction);
$("#multiply").on("click", performMultiplication);
$("#divide").on("click", performDivision);
$("#equal").on("click", getFinalAnswer);


//Global Variables dealing with recieving input (numArray) and displaying input to the user (numString)
var numArray = [];
var numString = "";


//Global variables used for closure
firstNumber = 0;
secondNumber = 0;


//This function captures the input as an array and calls the display function
function captureInput() {
    //push the value that is inside the HTML tag (e.g. #zero will have a value of 0)
    numArray.push($(this).html());
    displayInput(numArray);
}


//This function displays the input to the user as a string
function displayInput() {
    numString = numArray.join("");
    $("#display").html(parseFloat(numString));
}


//This clears the array and clears the display
function clearInput() {
    numArray.length = 0;
    displayInput(numArray);
}


//This reverses the sign of the number by adding (or removing) "-" to the 0th index
function reverseSign() {
    if (numArray[0] === "-") {
        numArray.shift();
    }
    else {
        numArray.unshift("-");
    }
    displayInput(numArray);
}


//This function adds two values by using the add closure
function performAddition () {
    firstNumber = parseFloat(numString);
    clearInput();
    createClosure = add(firstNumber);
}


//This function adds two values by using the add closure
function performSubtraction () {
    firstNumber = parseFloat(numString);
    clearInput();
    createClosure = subtract(firstNumber);
}


//This function adds two values by using the add closure
function performMultiplication () {
    firstNumber = parseFloat(numString);
    clearInput();
    createClosure = multiply(firstNumber);
}


//This function adds two values by using the add closure
function performDivision () {
    firstNumber = parseFloat(numString);
    clearInput();
    createClosure = divide(firstNumber);
}



//This is a closure which adds two values
function add(value1) {
    return function (value2) {
        return value1 + value2;
    }
}


//This is a closure which subtracts two values
function subtract(value1) {
    return function (value2) {
        return value1 - value2;
    }
}


//This is a closure which multiplies two values
function multiply(value1) {
    return function (value2) {
        return value1*value2;
    }
}


//This is a closure which divides two values
function divide(value1) {
    return function (value2) {
        return value1/value2;
    }
}


//This function completes the closure by passing the second number
function getFinalAnswer () {
    secondNumber = parseFloat(numString);
    clearInput();
    completeClosure = createClosure(secondNumber);
    $("#display").html(parseFloat(completeClosure));
}
});

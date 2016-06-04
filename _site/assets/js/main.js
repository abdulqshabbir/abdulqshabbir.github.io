$(document).ready(function() {

//Event Handlers
// $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #point").on("click", captureInput);

$(".number").on("click", captureInput);
$("#allClear").on("click", clearInput);
$("#plusMinus").on("click", reverseSign);
$("#add").on("click", performAddition);
$("#subtract").on("click", performSubtraction);
$("#multiply").on("click", performMultiplication);
$("#divide").on("click", performDivision);
$("#equal").on("click", getFinalAnswer);
$("#percent").on("click", divideBy100);


//Global Variables dealing with recieving input (numArray) and displaying input to the user (numString)
var numArray = [];
var numString = "";


//Global variables used for closures
firstNumber = 0;
secondNumber = 0;


//This function captures the input as an array and calls the display function
function captureInput() {
    //push the text inside the HTML tag (e.g. #zero will have a value of 0)
    numArray.push($(this).html());
    displayInput(numArray);
}


//This function displays the input to the user as a string, and shortens the input to 12 characters if it's too long
function displayInput() {
    numString = numArray.join("");
    console.log("numString is equal to: " + numString);

    if (numString.length > 9) {
        var displayTwelveCharacters = numString.substring(0, 9);
        $("#display").html(displayTwelveCharacters);
        console.log("Your number was too long!");
    } else {
        $("#display").html(parseFloat(numString));
    }
}


//This clears the array, the display, and the stored numbers
function clearInput() {
    numArray.length = 0;
    displayInput(numArray);
    firstNumber = 0;
    secondNumber = 0;
}

//This only clears the array and numString but does not clear firstNumber and secondNumber

function clearArray() {
    numArray.length = 0;
    displayInput(numArray);

}



//This reverses the sign of the number by adding (or removing) "-" at the 0th index
function reverseSign() {
    if (numArray[0] === "-") {
        numArray.shift();
    } else {
        numArray.unshift("-");
    }
    displayInput(numArray);
}


//This function adds two values by using the add closure
function performAddition () {
    if(firstNumber === 0) {
        firstNumber = parseFloat(numString);
        clearArray();
        $("#display").html(firstNumber);
        createClosure = add(firstNumber);

    } else {
        firstNumber = parseFloat($("#display").html());
        clearArray();
        console.log("firstNumber is: " + firstNumber);
        $("#display").html(firstNumber);
        createClosure = add(firstNumber);
    }

}


//This function adds two values by using the subtract closure
function performSubtraction () {
    if (firstNumber === 0) {
        firstNumber = parseFloat(numString);
        clearArray();
        $("#display").html(firstNumber);
        createClosure = subtract(firstNumber);
    } else {
        firstNumber = parseFloat($("#display").html());
        clearArray();
        $("#display").html(firstNumber);
        createClosure = subtract(firstNumber);
    }
}


//This function adds two values by using the multiply closure
function performMultiplication () {
    if (firstNumber === 0) {
        firstNumber = parseFloat(numString);
        clearArray();
        $("#display").html(firstNumber);
        createClosure = multiply(firstNumber);
    } else {
        firstNumber = parseFloat($("#display").html());
        clearArray();
        console.log("firstNumber is: " + firstNumber);
        $("#display").html(firstNumber);
        createClosure = multiply(firstNumber);
    }
}


//This function adds two values by using the divide closure
function performDivision () {
    if (firstNumber === 0) {
        firstNumber = parseFloat(numString);
        clearArray();
        $("#display").html(firstNumber);
        createClosure = divide(firstNumber);
    } else {
        firstNumber = parseFloat($("#display").html());
        clearArray();
        console.log("firstNumber is: " + firstNumber);
        $("#display").html(firstNumber);
        createClosure = divide(firstNumber);
    }
}



//This is a closure which adds two values
function add(value1) {
    return function (value2) {
        return value1 + value2;
    };
}


//This is a closure which subtracts two values
function subtract(value1) {
    return function (value2) {
        return value1 - value2;
    };
}


//This is a closure which multiplies two values
function multiply(value1) {
    return function (value2) {
        return value1*value2;
    };
}


//This is a closure which divides two values
function divide(value1) {
    return function (value2) {
        return value1/value2;
    };
}


//This function reads the current input and divides it by 100.  Then, it converts the number into an array and passes the array to the display function
function divideBy100 () {
    var currentNumber = Number($("#display").text());
    currentNumber = currentNumber/100;
    numArray = currentNumber.toString().split("");
    displayInput(numArray);
}


//This function completes the closure by passing the second number and returns the final output.  Also, shorten the final answer by converting to scienntific notation if it's too long.
function getFinalAnswer () {
    secondNumber = parseFloat(numString);
    clearArray();
    completeClosure = createClosure(secondNumber);
    if (completeClosure.toString().length > 12) {
        var formattedNumber = completeClosure.toPrecision(6);
        console.log("Your formatted Number: " + formattedNumber);
        $("#display").html(formattedNumber);
    } else {
        $("#display").html(parseFloat(completeClosure));
    }
}

});

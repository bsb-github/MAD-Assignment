reverseString("Comsats")
console.log(5 ** 3);
// program to print the kth digit from last. E.g. input 23617 and k=4 output 3
function kthElement(number, index){
    let myFunc = num => Number(num);
 
    var intArr = Array.from(String(number), myFunc);
    console.log("Problem 1");
    console.log("Element at " + index + " is "+intArr[index]);
    
}
// program to find sum of all digits. Input 23617 output 2+3+6+1+7=19
function sumOfDigits(number){
    let myFunc = num => Number(num);
 
    var intArr = Array.from(String(number), myFunc);
    let sum = intArr.reduce((Sum, a) => Sum + a, 0);
    console.log("Problem 2");
    console.log("The Sum is "+sum);

    
}
//program to find sum of even digits. Input 23617 output 2+6=8;

function sumOfEvenDigits(number){
    let myFunc = num => Number(num);
 
    var intArr = Array.from(String(number), myFunc).filter(number => {
        return number % 2 === 0;
      });

    let sum = intArr.reduce((Sum, a) => Sum + a, 0);
    console.log("Problem 3");
    console.log("The sum of Even Digits :"+sum);

    
}
// JavaScript that calculates the squares and cubes of the numbers from 0 to 10.
function Problem4(number){
    console.log("Problem 4");
    console.log("Square : "+ number ** 2);
    console.log("Cube : "+ number ** 3);
}
// Stirng in Reverse 
function reverseString(str){
    console.log("Problem 5A");
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    console.log(newString);
}
// The number with its digits in the reverse order

function digitInReverseOrder(number){
    console.log("Problem 5B");
   var reverse = parseInt(String(number).split('').reverse().join('')* Math.sign(number));
    console.log(reverse);
}

/*
 Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. 
 If the user input matches with guess number,
 the program will display a message "You WIN" otherwise display a message "Not matched".
 */

function guessNumber() {
    let guess = Math.floor(Math.random() * 10);
    console.log("Problem 6");
    let guessedNumber = prompt("Please enter a number: ");
    if(guessedNumber == guess) {
        console.log("You Win!");
    }else{
        console.log("Not matched");
    }
}

// JavaScript program to check whether 10 appears in first or last position of a given array of integers.
// The array length must be greater or equal to 2

function checkForTenInArray(array){
    console.log("Problem 7");
    if(array.length <2) {
        console.log("Invalid array length");
    }else{
        for(let i = 0; i < array.length; i++){
            if(i == 0 && array[i] == 10){
                console.log("10 found at first position");
                break;
            }else if(i == array.length -1 && array[i] == 10){
                console.log("10 found at last position");
               
            }else{
                continue;
            }
        }
    }
}
// JavaScript function that returns a passed string with letters in alphabetical order
function arangeStringInAlphabeticalOrder(str){
    console.log("Problem 8")
    var orderStr = str.split('').sort().join('');
    console.log(orderStr);
}
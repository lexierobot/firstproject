//Exercise Datatypes
//Rewrite
//2.
var x = 'Frodo' + ' Gollum';

console.log(x);

//3.
var home = 'shire';
var zip = 30813;

y = home * zip;

console.log(y);

//Bonus
console.log(2 + true);


//Exercise Conditional 
//Rewrite
var i = 2;
i +=5;
var k = i * 2;

console.log(k);

k%=3; //should return value of 2

console.log(k); 
console.log(k%=2); //it returned 0 since 2/2 has no remainder

//2 & 3
if (k%2 == 0) {
    console.log(true);
} else {
    console.log('variable was not even');
};


// **Conditional Homework**
//1 
// var count = 2;

// count+=5; //should make count=7
// console.log (count*=2); //should return 14
// console.log (count%=3); //should return a value of 2
// console.log (count%=2); //should return 0 since 14 is evenly divisible by 7, there is no remainder

// if(count !== 0){
//     console.log ("answer is zero");
// } else {
//     console.log ("variable is not even");
// }

// if (count < 1 && count > -2) {
//     console.log ("it's less than one and greater than negative 2")
// } if (count < 10 || count > 200) {
//     console.log ("it's not less than one and is greater than negative 2")
// } if (count == 0 || count < 0) {
//     console.log ("the answer is less than zero");
// }

// if (count !== 1){
//     if (count == 1){
//         if (count = false) {
//             console.log ("doesn't equal one, equals one, and is false");
//         } // multiple if statements are only logged if each statement is met.
//         // conditional statements are logged if one or another statement is met.
//     }
// }
// //**Loop Homework**
// //1 
// var i;
// //2
// for (i = 0; i <=50; i++){
//     console.log(i);
// } 
// while(i<=50){ //3
//     console.log(i);
//     i+=2;
// }

// //4 Loop from 0 to 100
// var a;
// for (a = 0; a <=100; a++){
//     console.log(a);
//     if (a %3 === 0 && a %5 === 0)
//         console.log("fizzbuzz");
//     else if (a %3 === 0) 
//         console.log("fizz");
//      else if (a %5 === 0)
//         console.log ("buzz");
//     }

//**Function Homework**

// //1
// function addNumber (x, y) {
//   console.log(x+y);
// }
// addNumber(5,10);

// //2

// function multiply (c,d) {
//     console.log (c*d);
// }
// multiply (9,9);

// //also 2
// function myFunction (a,b){
//     return a * b;
// }
// var result = myFunction (7,9);
// console.log(result);

// //3

// var i = 1;

// while (i <= 50){
//   if(i%2===0){
//     console.log(i);
//   }
//   i++;
// }


// //4
// var person; //global variable
// function name(x, y){
// var answer = 'Lexie' + ' Helwig';
// console.log(answer);
// }
// name ();

// //5 IIFE
// (function() {
//     var x = "This is an IIFE"
//     console.log(x);
//     })();

// //EXERCISE MATH

// //1
// var x = Math.ceil(Math.random() * 20);
// console.log(x);
//  var y = prompt('Guess a number between 1 and 20');
//  if (y == x)
//    console.log('You got it!');
//   else
//    console.log('Nope, it was ' + x);
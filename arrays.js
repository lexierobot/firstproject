//    //EXERCISE ARRAY

//    //1 10 grocery store items on loop, log each
//    var groceries = [ 
//        "bananas",
//        "spinach",
//        "almond milk",
//        "peanut butter",
//        "avocado",
//        "butter",
//        "la croix",
//        "blueberries",
//        "strawberries",
//        "yogurt"
//     ];
//     var i;
//   for (i = 0; i <= 9; i++){
//       console.log(groceries[i]);
//   }

// //2 string 10char+, log each character
// var str = "peanut butter";
// var i = str.charAt();
// for (i = 0; i <=12; i++) {
//     console.log(str[i]);
// }

// //3 Make the string uppercase
// var j = str.toUpperCase();
// console.log(j)

//EXERCISE ARRAYS 2: Revenge of the Index
//Grocery Store App
    
// var inventory = [
//     ['bananas', 100],
//     ['spinach', 99],
//     ['peanut butter', 50],
//     ['avocado', 49],
//     ['almond milk', 100],
//     ['potatoes', 99],
//     ['butter', 50],
//     ['chicken', 49],
//     ['cheese', 100]
//     ['bread', 99]
// ]
//     function add(){
//     var input = document.getElementById('user input').value;

//     for (var i = 0; i <= inventory.length; i++) {
//         if(input == array[0]){
//             add.push(inventory[0] -=1);
//         }
//     }
// } add();

// // option 1: multideminsional array
// let inventory = [
//     ['apple', 10],
//     ['blueberry', 15],
//     ['broccoli', 5],
//     ['milk', 25],
//     ['cheese', 4]
// ]

// let cart = [];

// function add(){
//     let input = document.getElementById('userInput').value;
//     inventory.forEach(array => {
//         let name = array[0];
//         let qty = array[1];
//         if(input == name) {
//             array[1] +=1;
//             let temp = [];
//             temp.push(name);
//             temp.push(qty);
//             cart.push(temp);
//             console.log(cart);
//             console.log(inventory);
//         }    
//     });
// }

// function sub (){
//     let input = document.getElementById('userInput').value;
//     for(let i = 0; i < inventory.length; i++) {
//         if(input == inventory[i][0]) {
//             if(inventory[i][1] > 0) {
//                 inventory[i][1] -= 1;
//                 console.log(inventory[i]);
//             } else {
//                 console.log(`${input} is out of stock!`);
//             }  

//         }
//     }
// }

//Exercise Conditional
var x = 2 //Create a counter variable with value 2
x = 2 + 5;
var y = x * 2;

console.log(y);

x = y%3;
console.log(x);
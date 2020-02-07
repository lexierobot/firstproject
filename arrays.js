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

// //EXERCISE ARRAYS 2: Revenge of the Index
// //Grocery Store App
    
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

//Exercise Array
//Rewrite

//1
var list = [
    'bananas',
    'spinach',
    'milk',
    'honey',
    'butter',
    'sugar',
    'flour',
    'juice',
    'orange',
    'tomato'
];

for(i = 0; i <= 9; i++) {
    console.log(list[i]);
}

//2
var x = 'grocery store';

for (i = 0; i <= x.length; i++) {
    console.log(x[i]);
};

//3
console.log(x.toUpperCase([i]));

//Exercise Arrays 2: Revenge of the Index

var grocList = [
    {item: 'bananas', qty: 100},
    {item: 'spinach', qty: 99},
    {item: 'milk', qty: 50},
    {item: 'honey', qty: 100},
    {item: 'butter', qty: 20},
    {item: 'sugar', qty: 30},
    {item: 'flour', qty: 100},
    {item: 'juice', qty: 65},
    {item: 'orange', qty: 78},
    {item: 'tomato', qty: 45},
];

//Subtract 1 from each inventory item.
grocList.forEach(function(grocList) {
    console.log('-1 ' + grocList.item + ', New qty = '+ (grocList.qty - 1));
});

//Exercise Grocery Store App

var grocStore = [
    {invItem: 'peaches', invQty: 24},
    {invItem: 'pineapple', invQty: 75},
    {invItem: 'peanut butter', invQty: 46},
    {invItem: 'yogurt', invQty: 28},
    {invItem: 'broccoli', invQty: 23},
    {invItem: 'potatoes', invQty: 54},
    {invItem: 'oatmeal', invQty: 91}
];

let input = document.getElementById('userInput').value;
    // if (function add()) {
    //     console.log();

    // } else if function sub() {

    // } else func












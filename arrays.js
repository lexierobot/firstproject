   //EXERCISE ARRAY

   //1 10 grocery store items on loop, log each
   var groceries = [ 
       "bananas",
       "spinach",
       "almond milk",
       "peanut butter",
       "avocado",
       "butter",
       "la croix",
       "blueberries",
       "strawberries",
       "yogurt"
    ];
    var i;
  for (i = 0; i <= 9; i++){
      console.log(groceries[i]);
  }

//2 string 10char+, log each character
var str = "peanut butter";
var i = str.charAt();
for (i = 0; i <=12; i++) {
    console.log(str[i]);
}

//3 Make the string uppercase
var j = str.toUpperCase();
console.log(j)

//EXERCISE ARRAYS 2: Revenge of the Index

var inventory = [];

function fillArray() {
    inventory["bananas"] = 50,
    inventory["spinach"] = 40,
    inventory["peanut butter"] = 34,
    inventory["avocado"] = 28,
    inventory["almond milk"] = 50,
    inventory["potatoes"] = 30,
    inventory["butter"] = 100,
    inventory["chicken"] = 50,
    inventory["cheese"] = 100,
    inventory["bread"] = 50,
fillArray();
inventory.forEach(buy)
    function buy(item, index, inventory) {
    inventory[index] = item - 1;
}
}

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
    
var inventory = [
    ['bananas', 100],
    ['spinach', 99],
    ['peanut butter', 50],
    ['avocado', 49],
    ['almond milk', 100],
    ['potatoes', 99],
    ['butter', 50],
    ['chicken', 49],
    ['cheese', 100]
    ['bread', 99]
]
    function add(){
    var input = document.getElementById("input").value;

    for (var i = 0; i <= inventory.length[1]; i++) {
        if(inventory[index] == input)
            console.log(inventory[i--]);
    }
} add();
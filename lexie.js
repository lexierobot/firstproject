// Lexie's javascript homework

/*"Frodo" + "Gollum"

var Frodo = "good";
var Gollum = "bad";

console.log (Frodo + Gollum);

var shire = "home";
var mordor = 666;

console.log (shire * mordor);
console.log (2 + true);

var a = "1";
var b = "2";

console.log (a + b);
console.log (a * b);
console.log ((a * b) + (2 + true))
*/

// Conditional Homework

var count = 2;

count+=5; //should make count=7
console.log (count*=2); //should return 14
console.log (count%=3); //should return a value of 2
console.log (count%=2); //should return 0 since 14 is evenly divisible by 7, there is no remainder

if(count !== 0){
    console.log ("answer is zero");
} else {
    console.log ("variable is not even");
}

if (count < 1 && count > -2); {
    console.log ("it's less than one and greater than negative 2")
} if (count < 10 || count > 200); {
    console.log ("it's not less than one and is greater than negative 2")
} if (count == 0 || count < 0); {
    console.log ("the answer is less than zero");
}

if (count !== 1);
    if (count == 1);
        if (count = false); {
            console.log ("doesn't equal one, equals one, and is false");
        } // multiple if statements are only logged if each statement is met.
        // conditional statements are logged if one or another statement is met.


//Function Homework

var x = addNumber (10, 55);

function addNumber (x, y) {
  console.log (x+y)
  var x = 5;
  var y = 10;
}
addNumber ();

function answerThis (b, c) {
    return b * c;
    var b = 10;
    var c = 50;
}
answerThis ();

//just testing
function print () {
    console.log ("hey");
}
print ();

//more tests
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  person.fullName.call(person1, "Oslo", "Norway");

/*INLÄMNINGSUPPGIFT - JONAS TERN*/

// Uppgift 1:
let blue = false;

function taskOne() {
  let containerElement = document.getElementById("answer-one");
    if (blue === false) {  //When the button is being pressed, the variable "blue" changes to true and the background color changes to blue.
      containerElement.style.backgroundColor = "blue";
      blue = true;
    }
    else { //If the button is being pressed again, the background color goes back to white and the variable "blue" goes back to false.
      containerElement.style.backgroundColor = "white";
      blue = false;
    }
}


//Uppgift 2:
const numbers = [234, 986, 784];

function taskTwo() {
  numbers.push(Math.floor(Math.random() *101)); //When button is being pressed a new random number between 1-100 is being pushed to the array "numbers".

  const containerElement = document.getElementById("answer-two");
  containerElement.innerHTML = numbers;
}


//Uppgift 3:
function taskThree() {
  const date = new Date();
  const day = date.getDay(); //Gets the current day.

  if(day === 6 || day === 0) { //If it's weekend (saturday or sunday), an alertbox with a specific message will be shown.
    alert("Woohooo it's weekend")
  } else { //If it's a weekday (Monday-Friday), an alertbox with another message will be shown.
    alert("FML")
  };
};


//Uppgift 4:
function multiplier(valueOne, valueTwo) {
  const sum = valueOne * valueTwo;

  if(valueOne === Math.round(valueOne * 100) / 100 && valueTwo === Math.round(valueTwo * 100) / 100){ //If valueOne and valueTwo gets a number with a maximum of two decimals, the variable "sum" will multiply the two numbers and show the answer inside a alertbox.
    alert("Produkten är: " + sum);
  } else {
    alert("Jag kan bara multiplicera nummer!"); //If either valueOne or valueTwo is not a number, or a number with more than two decimals an error message will be shown.
  };
};

function taskFour() { //When pressing the button the function "multiplier" will run.
  multiplier(8.6, 36.2); 
};


//Uppgift 5:
const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  for(let i = 0; i < fruits.length; i++){ //A loop that will run a certain amount of times depending on how many items that is inside the array "fruits". 
    if(fruits[i] === "apelsin" || fruits[i] === "päron"){ //If the fruit is either Orange or Pear, the item will be pushed and store inside the array "trash". 
      trash.push(" " + fruits[i])
    } else { //If the fruit is not an orange or pear it will be store inside the array "eatable".
      eatable.push(" " + fruits[i])
    }
  };
  const containerElement = document.getElementById("answer-five")
  containerElement.innerHTML = `<b>Ätligt: </b> ${eatable} <br> <b>Skräp: </b> ${trash}`;
}


//Uppgift 6:
const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  for(let i = 0; i < persons.length; i++){ //A loop that will run a certain amount of times depending on how many objects that is inside the array "persons".
    if(persons[i].age >= 30){ //If the person is 30 years old or older, the object will be stored inside the array "overThirty".
      overThirty.push(persons[i]);
    } else { //If younger than 30years old, the object will be stored inside the array "underThirty".
      underThirty.push(persons[i]);
    };
    if(persons[i].married === true){ //If the person is married, it will be stored inside the array "Married".
      married.push(persons[i]);
    } else{ //If not married, it will be stored inside the array "notMarried".
      notMarried.push(persons[i]);
    };
  };

  //These four variables below will make a "loop" inside the mentioned array and give us the item "name" of every object.
  const overThirtyName = overThirty.map((person) => person.name); 
  const underThirtyName = underThirty.map((person) => person.name);
  const marriedName = married.map((person) => person.name);
  const notMarriedName = notMarried.map((person) => person.name);
  
  //The four variables below will make an blankspace after each comma(, ).
  const overThirtyNameBlank = overThirtyName.join(", ")
  const underThirtyNameBlank = underThirtyName.join(", ");
  const marriedNameBlank = marriedName.join(", ")
  const notMarriedNameBlank = notMarriedName.join(", ")

  const containerElement = document.getElementById("answer-six");
  containerElement.innerHTML = `<b>Över 30:</b> ${overThirtyNameBlank} <br>
    <b>Under 30:</b> ${underThirtyNameBlank} <br>
    <b>Gift:</b> ${marriedNameBlank} <br>
    <b>Ogift:</b> ${notMarriedNameBlank}`;
};


//uppgift 7: 
const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  let lineBreaks = "";
  for(let x of addMeSomeLineBreaks){
    if (x === ","){ //If the "for of" loop finds a comma (,), it will put a linebreak after. 
      lineBreaks += ", <br>";
    } else{ //If a comma(,) is not found, the variable "addMeSomeLineBreak" will be untouched.
      lineBreaks += x;
    };
  };
  const containerElement = document.getElementById("answer-seven");
  containerElement.innerHTML = lineBreaks;
}


//Uppgift 8:
function taskEight() {
  const card = document.getElementById("card-eight");

  card.style.display = "none"
  setTimeout(() => { //When pressing the button a timer of 3seconds will begin, the card with id="card-eight" will disapear meanwhile the timer is running.
    card.style.display = "block";
  }, 3000);
}


//Uppgift 9
function taskNine() {
  const card = document.getElementsByClassName("answer-container");
  const date = new Date();
  const hour = date.getHours(); //Gets the current hour.

for(let i = 0; i < card.length; i++){
  if(hour >= 17 || hour < 00) { //If the hour is between 17 and 00, the backround color of all "answer-container" will change to blue.
    card[i].style.backgroundColor = "blue";
  } else { //If not between 17 and 00, the backgroundcolor will change to red.
    card[i].style.backgroundColor = "red";
  };
}}


//Uppgift 10:
function calculator(valueOne, valueTwo, operator) {
  if(valueOne === Math.round(valueOne * 100) / 100 && valueTwo === Math.round(valueTwo * 100) / 100){ //If valueOne and valueTwo gets a number with a maximum of two decimals, the switch statement (operator) will run.
    switch(operator){
      case "add": //Will add the variables "valueOne" and "valueTwo" together and put the answer inside an alertbox.
        alert(valueOne + valueTwo);
        break;
      case "subtract": //Will subtract the variable "valueOne" with "valueTwo"  and put the answer inside an alertbox.
        alert(valueOne - valueTwo);
        break;
      case "multiply": //Will multiply the variables "valueOne" and "valueTwo" together and put the answer inside an alertbox.
        alert(valueOne * valueTwo);
        break;
      case "divide": //Will divide the variable "valueOne" with "valueTwo" and put the answer inside an alertbox.
        alert(valueOne / valueTwo);
        break;
      default: //If the operator is not one of the above (add, subtract, multiply or divide), an error message will be shown.
        alert("Något är fel");
    }
  } else { //If the variables "valueOne" and "valueTwo" is a number with more than two decimals or not a number, an error message will be shown. 
    alert("Något är fel");
  };   
};

  function taskTen() { //When pressing the button the function "calculator" will run.
  calculator(6.25, 2, "divide");
};

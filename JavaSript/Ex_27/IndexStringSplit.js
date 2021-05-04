let friends = "tute, mati, pepe, raul, juan, marta, agus, loli";
let friendsArray = friends.split(",");

console.log(friendsArray);

const piAsText = "3.14";

console.log(typeof piAsText); // string

const pi = parseFloat(piAsText);

console.log(pi);

console.log(typeof pi); // number

let number = 4; //Number toString

console.log(typeof number); // number

let message = number.toString() + "2";

console.log(message); // 42

console.log(typeof message); // string

//IF STATEMENT

const playerLife = 0;

if (playerLife == 0) {
  console.log("Game Over!!!!");
}

const number = 1;

if (number >= 2) {
  console.log("We won't see this message as the condition it's always false");
}

console.log(
  "We will see this massege all the time as it doesn't depend on the if statement and the code flows keeps on going"
);


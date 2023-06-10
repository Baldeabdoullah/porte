// la porte des variables

// let age = 5;

// console.log(age);

// if (true) {
//   let score = 25;
//   console.log("score", score);
// }

// console.log(score);

let nombres = [12, 3, 65, 0, 565, 4, 44, 21, 87];

for (let i = 0; i < nombres.length; i++) {
  console.log("iteration no: ", nombres[i]);
  if (nombres[i] % 2 != 0) {
    console.log(nombres[i]);
    break;
  } else {
    continue;
  }
}

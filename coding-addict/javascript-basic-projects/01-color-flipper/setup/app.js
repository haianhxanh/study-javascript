// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   // get random number between 0 - 3 - this is because we want to change the value of colors[0], colors[1], colors[2], colors[3]

//   const randomNumber = getRandomNumber();
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }

// my solution: random rgba colors without limitation

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 - 3 - this is because we want to change the value of colors[0], colors[1], colors[2], colors[3]

  const firstValue = getRandomNumber();
  const secondValue = getRandomNumber();
  const thirdValue = getRandomNumber();

  document.body.style.backgroundColor = `rgb(${firstValue}, ${secondValue}, ${thirdValue})`;
  color.textContent = `rgb(${firstValue}, ${secondValue}, ${thirdValue})`;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * 255);
};

"use strict";

// function calculate(number, e) {
//   if (e >= 1) {
//     return number * calculate(number, e - 1);
//   } else if (e <= -1) {
//     return (1 / number) * calculate(number, e + 1);
//   } else {
//     return 1;
//   }
// }

// [1,2,3,4] [1,2]

// function arrayDiff(a, b) {
//   let newArray = [];
//   let resultArray = [];
//   if (b.length == 0) {
//     newArray = a;
//     // console.log(newArray);
//   }
//   for (let i = 0; i < b.length; i++) {
//     for (let y = 0; y < a.length; y++) {
//       if (b[i] !== a[y]) {
//         newArray.push(a[y]);
//       }
//     }
//   }

//   newArray.forEach((value) => {
//     if (!resultArray.includes(value)) {
//       resultArray.push(value);
//     }
//   });
//   return resultArray;
// }

function arrayDiff(a, b) {
  let newArray = [];

  for (let i = 0; i < a.length; i++) {
    for (let y = 0; y < b.length; y++) {
      if (a[i] == b[y]) {
        a[i] = "remove";
      }
    }
    if (a[i] !== "remove") {
      newArray.push(a[i]);
    }
  }

  return newArray;
}

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

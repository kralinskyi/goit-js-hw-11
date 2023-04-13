console.log(1);

// try {
//   setTimeout(() => {
//     const number = 5;

//     number = 7;

//     console.log(number);
//   }, 1000);
// } catch (err) {
//   console.log(err.message);
// }

setTimeout(() => {
  try {
    const number = 5;

    number = 7;

    console.log(number);
  } catch (err) {
    console.log(err);
  }
}, 1000);

console.log(2);

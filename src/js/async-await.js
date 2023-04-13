// const BASE_URL = 'https://pixabay.com/api/';
// const key = '34842285-9ef26a99ee49cc306160c27d8';

// const fetchUsers = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}?key=${key}&q='rats'`);

//       if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchUsers().then(console.log).catch(console.log);

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async–функції?

// async function wait() {
//   try {
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     return 10;
//   } catch (err) {
//     throw err;
//   }
// }

// async function f() {
//   try {
//     await wait();
//   } catch (err) {
//     console.log(err);
//   }
// }

// f();

// (async () => {
//   try {
//     console.log(await wait());
//   } catch (err) {
//     console.log(err);
//   }
// })();

// const sayHi = () => {
//   debugger;

//   console.log(`sayHi!`);
// };

// sayHi();

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((_, reject) => setTimeout(reject, 100, 'quick'));

// const promises = [promise1, promise2];

// Promise.any(promises).then(value => console.log(value));

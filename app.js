// function palindropmik(num) {
//   if (num < 10 && num > 0) {
//     return true;
//   }
//   let son1 = 0;
//   let son2 = 0;
//   num
//     .toString()
//     .split("")
//     .forEach((el) => {
//       son1 += el;
//     });
//   num
//     .toString()
//     .split("")
//     .reverse()
//     .forEach((el) => {
//       son2 += el;
//     });
//   let is = son1 === son2;

//   return is;
// }

// console.log(palindropmik(11211));

// function foo(nums) {
//   let difference = nums[1] - nums[0];
//   nums.push(nums[nums.length - 1] + difference);
//   return nums;
// }

// console.log(foo([1, 3, 5,7,9,11]));

// function calculate(obj) {
//   let sum = 0;
//   for (const i in obj) {
//     sum += obj[i];
//   }
//   return sum;
// }

// console.log(calculate({ a: 2, b: 5 ,c:7}));

// function dublicate(num) {
//   let num2 = "";
//   let arr = num.toString().split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[i + 1]) {
//       num2 += arr[i];
//     }
//   }
//   return num2;
// }

// console.log(dublicate(44666));

// function cutter(str) {
//   if (!str.slice(-1).includes("?")) {
//     return str;
//   }
//   while (str.endsWith("?")) {
//     str = str.slice(0, -1);
//   }
//   return str;
// }

// console.log(cutter("sa?l?om"));

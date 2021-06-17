// //分割代入
// const myProfile = {
//   name: "aaaaaaa",
//   age: 24
// };

// const { name, age} = myProfile;
// const message2 = `名前は${name}です`;
// console.log(message2);

//スプレッド構文

// const arr1 = [1, 2];

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

//配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//map,filtter

const nameArr = ["tanaka", "yamada", "oyama"];

// nameArr.map((name, index) => console.log(`${index + 1}番めは${name}です`))
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name))

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "tanaka") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);

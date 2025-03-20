let arr=[1, 2, 3, 4, 5];
let result= arr.splice(1, 2, 200, 300);
console.log(arr);
console.log(result);

let arr2 = ['Mike', 'Tom', 'Hamsu'];
arr2.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});
//순서 출력

let arr3=[1, 2, 3, 4, 5];
let result3 = arr3.indexOf(3);
console.log(result3);

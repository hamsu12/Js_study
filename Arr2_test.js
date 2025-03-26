let arr = [1, 4, 3, 2, 5];
arr.sort();
console.log(arr);
// 배열 재정렬, 배열 자체가 변경됨.
// 인수로 받은 정렬 로직을 담은 함수를 받음.

// https://lodash.com/

//배열 수 합치기

let result = 0;
arr.forEach((num)=>{
    result +=num;
});
console.log(result);

const result2 = arr.reduce((prev, cur)=>{
    return prev + cur; // prev = 누산값
}, 0) // prev =
console.log(result2);

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

const result4 = arr3.find((item)=>{
    return item%2 === 0;
});
console.log(result4);

let userList = [
    {name:"Hamsu", age:22},
    {name:"Sujeong", age:18},
];

const result5 = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});
console.log(result5);

let newUserList = userList.map((user, index)=> {
    return Object.assign({}, user,{
        id : index+1,
        isAdult:user.age >19,
    });
});
console.log(newUserList);
// console.log(userList);

const arr6 = "안녕,나는,함수야";
const result6 = arr6.split(",") // 스페이스도 가능, 따옴표만 일 경우엔 글자별로 출력
console.log(result6);




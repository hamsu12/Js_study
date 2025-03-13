let n = "name";
let a = "age";
const test= {
    [n]: "Mike",
    [a]: 30,
    [1 + 4]: 5,
};
console.log(test); // 왜 '5'로 출력되지?

function makeObj(key, val){
    return {
        [key] : val
    }
}
const obj = makeObj("성별", "male");
console.log(obj); // 어떤게 key가 될지 모르는 메소드의 경우 유용


const user = {
    name:"Mike",
    age:30,
};
const user2 = Object.assign({}, user);
// 복사시 Object.assign 메소드 사용
user2.name = "Tom"

console.log(user);
console.log(user2); // 기존 user은 Mike, 바뀐 값 Tom

// key 출력 시 Object.key , 값은 Object.values

const result = Object.entries(user);
console.log(result); // 키 & 값 모두 출력, 배열 안에 배열 생성

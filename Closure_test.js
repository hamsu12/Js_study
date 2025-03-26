//내부 Lexical은 외부 Lexical의 참조를 가짐
//내부에 없으니 외부(전역)에서 값을 찾음

//Closure = 함수와 렉시컬 환경의 조합

function makeCounter() {
    let num =0;
    return function (){
        return num++;
    };
}
let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
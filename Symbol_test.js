//Symbol : 유일성 보장
//Symbol.for() : 전역 심볼

const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); //false
console.log(id1 == id2); //false

const id3 = Symbol('id');
const id4 = Symbol


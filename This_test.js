//call, apply, bind

const mike={
    name:"Mike",
};

function showThisName(){
    console.log(this.name);
}
showThisName.call(mike); //this가 mike를 가리킴

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 2004, "student");
console.log(mike);

//apply는 함수 매개변수를 처리하는 방법 제외 시 call가 일치 (동작방식은 같다!)
//call : 매개변수를 직접 받음
//apply : 매개변수를 배열로 받음

update.apply(mike, [2007, "singer"]);
console.log(mike);

const nums=[3, 10, 1, 6, 4];
const minNum = Math.min.apply(null, nums);
const maxNum = Math.max.call(null, ...nums); // 차례대로 들어가야 하므로 스프레드 사용

console.log(minNum);
console.log(maxNum);

//bind : 함수의 this 값을 영구히 바꿀 수 있음



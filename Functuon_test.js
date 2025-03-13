function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}

function Item(title, price){
    this.title=title;
    this.price=price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    }
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000); // new를 안붙히면 그냥 함수 실행

console.log(item1, item2);
item1.showPrice();

let user5= new User('hamsu',22);
user5.sayName();
// 생성자를 이용해서 
// 모든 객체가 공통으로 사용하는 property, 메소드를 만들어 보자! 

function User (name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

// Prototype 
User.prototype.sum = function () {
    return "proto: " + (this.first + this.second + this.third);
};

let user1 = new User('hi', 10, 20, 50);
let user2 = new User('hey', 10, 20, 50);
let user3 = new User('hey', 10, 20, 50);
let user4 = new User('hey', 10, 20, 50);

// user3 의 sum 만 다르게 하고 싶다면? 
user3.sum = function() {
    return 'this: '+ (this.first + this.second + this.third);
}

// 확인해봅시다~ 
console.log(user1.sum());
console.log(user2.sum());
console.log(user3.sum());
console.log(user4.sum());


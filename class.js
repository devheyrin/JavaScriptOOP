class User {
    // class 안에서 함수를 만들 때는 function을 생략한다. 
    // 객체가 생성될 때 가장 먼저 실행되는 함수가 constructor 이다.
    // constructor 라는 이름을 쓰기로 약속되어있으므로, 다른 이름을 쓰면 안 된다!  
    constructor(name, first, second, third) {
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum() {
        return "proto: " + (this.first + this.second + this.third);
    }
}

// 전통적인 방법 property.method = function 으로 만든다. 
// User.prototype.sum = function() {
//     return "proto: " + (this.first + this.second + this.third);
// }

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

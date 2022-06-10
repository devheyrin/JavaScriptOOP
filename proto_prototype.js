function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}


// Person.prototype.sum = function() {
//     return this.first + this.second;
// };

// Person.prototype.avg = function() {
//     return (this.first + this.second) / 2;
// }

console.log(Person.prototype);


let user1 = new Person('name', 10, 20);
console.log(user1.__proto__);
console.log(user1.name);
// console.log(user1.sum());
// console.log(user1.avg());
user1.__proto__ = new Person();
console.log(user1.__proto__);

function PersonPlus(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

user1.__proto__ = new PersonPlus();
user1.third = 40;
console.log(user1);
console.log(PersonPlus.prototype);

console.log(user1.__proto__);

// 객체의 __proto__ 프로퍼티가 가리키는 Prototype 객체에서 찾는다. 
// 생성자 함수의 prototype 프로퍼티는 생성자 함수가 생성될 때 함께 생성되는 Prototype 객체를 가리키며, 두 객체는 상호참조관계이므로 참조관계를 변경할 수 없다. 
// 생성자 함수로 생성된 객체의 __proto__ 는 객체가 생성될 때 다른 프로퍼티값과 함께 생기며, Prototype 객체를 가리킨다. 추후 참조관계를 변경할 수도 있다. 
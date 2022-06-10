function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function() {
    return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, second);
    this.third = third;
}

// PersonPlus 로 생성된 객체가 Person이 가진 메소드를 사용할 수 있게 하는 방법 
// PersonPlus.prototype.__proto__ = Person.prototype;
// >> 편리하지만, 비표준이다. 

console.log(Object.create(Person.prototype).__proto__);
PersonPlus.prototype = Object.create(Person.prototype);
// >> 새 객체를 만들어 replace 하는것이기때문에 prototype.avg 가 이 코드 위에 온다면 
// 대체하는 과정에서 avg 기능이 사라져버릴수 있다. 

PersonPlus.prototype.avg = function() {
    return (this.first + this.second + this.third) / 3;
}

let kim = new PersonPlus('h', 10, 20, 30);
console.log(kim.constructor); // Person
PersonPlus.prototype.constructor = PersonPlus;
console.log(kim.constructor); // PersonPlus
console.log(kim.__proto__);


// 객체를 만들고, 상속할 때는 class 를 사용하자. > 깔끔한 방법
// 단, prototype을 이해한다는 것은 js를 깊이있게 이해한다는 것! 
// 유리한 전략을 세워서 적용하자. 
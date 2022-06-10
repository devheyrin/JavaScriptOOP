// 객체공장 - constructor 
// 아래처럼 객체를 개별 생성하는 방식은 아름답지 못하다. 
let jerry = {
    name: 'jerry',
    first: 10,
    second: 20,
    third: 30,
    sum() {
        return this.first + this.second + this.third;
    },
}; 

let harry = {
    name: 'harry',
    first: 10,
    second: 10,
    third: 10,
    sum() {
        return this.first + this.second + this.third;
    },
}; 

console.log(jerry.sum());
console.log(harry.sum());

let date = new Date('2022-6-9');

// 생성자 함수 만들기  
function User (name, first, second, third) {
    return {
        name: name,
        first: first,
        second: second,
        third: third,
        sum() {
            return this.first + this.second + this.third;
        }
    }
}

// 생성자 함수를 만들 수 있는 또 다른 방법 
// return {객체} 대신 함수 안에서 this.name = name 형식으로 값을 넘겨주도록 한다. 
function User (name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function () {
        return this.first + this.second + this.third;
    };
}

let james = new User('james', 10, 20, 30);
console.log(james);
console.log(james.sum());

let user1 = new User_other('hi', 10, 20, 30);
console.log(user1);

// function 안에서 return { 객체 } 를 하는 것과, 
// 수업중에서처럼 function 안에서 return을 쓰지않고 
// this.name = name 으로 만들어주는 것에는 어떤 차이가 있을까? 
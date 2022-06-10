class User {
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

class UserPlus extends User {
    avg() {
        return "extends: " + (this.first + this.second + this.third) / 2;
    }
}

let user1 = new UserPlus('name1', 10, 20, 30);
console.log(user1);
console.log(user1.avg());
console.log(user1.sum());


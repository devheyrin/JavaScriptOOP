class User {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second
    }
    sum() {
        return this.first + this.second;
    }
}

class UserPlus extends User {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }

    sum() {
        return super.sum() + this.third;
    }

    avg() {
        return "extends: " + (this.first + this.second + this.third) / 2;
    }
}

let user1 = new UserPlus('name1', 10, 20, 30);
console.log(user1);
console.log(user1.avg());
console.log(user1.sum());
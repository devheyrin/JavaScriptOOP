let superObject = {superVal: 'super'};

let subObject = Object.create(superObject); 
// superObject 를 부모로 하는 새로운 객체 subObject 를 생성한다
subObject.subVal = "subVal";
debugger;
console.log(subObject);
console.log("subObject.subVal => ", subObject.subVal);
console.log("subObject.superVal => ", subObject.superVal);

subObject.superVal = 'changedSuperVal';
console.log("subObject.superVal", subObject.superVal);
console.log("superObject.superVal", superObject.superVal);


let user1 = {
    name: 'name',
    first: 10,
    second: 20,
    sum() {
        return this.first+this.second;
    }
}

let user2 = Object.create(user1);
user2.name = "name2";
user2.first = 30;
user2.second = 4;
user2.avg = function() {
    return (this.first+this.second) / 2;
}; 


// user2 = {
//     name: 'user2',
//     first: 20,
//     second: 30,
//     avg() {
//         return (this.first+this.second) / 2;
//     }
// }

// user2.__proto__ = user1;
console.log('user2.sum(): ', user2.sum());
console.log('user2.avg(): ', user2.avg());

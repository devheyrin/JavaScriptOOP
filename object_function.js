// 자바스크립트에서는 함수도 객체이다. 
// 따라서 자바스크립트의 모든 함수는 call 이라는 메소드를 가지고 있다. 
// call의 인자로 객체를 지정하면 해당 함수의 this 는 인자로 받은 객체를 뜻하게 된다. 

let obj1 = {name: 'kim', first: 10, second: 20};
let obj2 = {name: 'lee', first: 20, second: 30};

function sum() {
    return this.first + this.second;
}

console.log(sum.call(obj1));

// 함수에 넣어야 하는 인자는 두번째 인자부터 넣을 수 있다. 
function avg(prefix1, prefix2) {
    return prefix1 + prefix2 + (this.first + this.second) / 2;
}

// avg 함수가 객체를 위해 일하는 용병이 된다. 
console.log(avg.call(obj2, "hi", "hello"));

// 새 함수를 만드는 분신술! 
let obj2Sum = sum.bind(obj2);
console.log(obj2Sum())

let obj2Avg = avg.bind(obj2);
console.log(obj2Avg('a', 'b'))
console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

const myMath = {
    PI: Math.PI,
    random() {
        return Math.random();
    },
    // 객체 안에서 메소드를 만드는 방법은 두 가지! 
    floor(val) {
        return Math.floor(val);
    },
    ceil: function(val) {
        return Math.ceil(val);
    }, 
};

console.log("myMath.PI", myMath.PI);
console.log("myMath.random()", myMath.random());
console.log("myMath.floor(1.3)", myMath.floor(1.3));
console.log("myMath.ceil", myMath.ceil(10.2));
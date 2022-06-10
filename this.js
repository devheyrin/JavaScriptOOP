// this를 사용하지 않는다면? 
let jerry = {
    name: 'jerry',
    first: 10,
    second: 20,
    sum(f, s) {
        return f + s;
    },
}; 

// jerry 에는 이미 first, second에 대한 정보가 이미 있는데도
// 메소드를 호출할 때 굳이 한번 더 언급해 주어야만 한다.  
console.log(jerry.sum(jerry.first, jerry.second));

// 메소드 안에서 자기 자신을 가리키기 위한 키워드 - this! 
let harry = {
    name: 'harry',
    first: 10,
    second: 20,
    sum() {
        return this.first + this.second;
    },
}; 

// 메소드 안에서 호출된 객체 자신을 가리키는 this 를 사용하기 때문에 
// 매개변수를 넘겨주지 않아도 된다. 
console.log(harry.sum());
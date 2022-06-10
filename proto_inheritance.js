let superObject = {superVal: 'super'};
let subObject = {subVal: 'sub'};

// 자바스크립트는 서로다른 객체를 부모자식관계로 만들수있다. 
// prototype 링크를 정해준다.
// prototype, __proto__ 쓰임 차이를 알기!
// __proto__ 는 정식 표준은 아니지만, 많이 쓰이기 때문에 거의표준으로 쓰임 
// But 정석적인 상속 방법은 아니다!   

subObject.__proto__ = superObject;
console.log(subObject);
console.log("subObject.subVal => ", subObject.subVal);
console.log("subObject.superVal => ", subObject.superVal);

subObject.superVal = 'changedSuperVal';
console.log("subObject.superVal", subObject.superVal);
console.log("superObject.superVal", superObject.superVal);

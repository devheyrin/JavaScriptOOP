// console.group(groupEnd) - 좀더 보기 좋게 출력해준다!  

console.group('array loop'); 
let memberArray = ['heyrin', 'monika', 'greeee'];

// while 문으로 반복 
console.log('while')
let i = 0;
while (i < memberArray.length){
    console.log(i, memberArray[i]);
    i++;
}

// for 문으로 반복 
console.log('for')
for (let i = 0; i < memberArray.length; i++) {
    console.log(i, memberArray[i])
}
console.groupEnd('array loop');

console.group('object loop');
let memberObject = {
    developer: 'heyrin',
    designer: 'monika',
    pm: 'greeee',
};
for (let key in memberObject) {
    console.log(key, memberObject[key]);
}
console.groupEnd('object loop');

 
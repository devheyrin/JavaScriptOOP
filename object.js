let memberArray = ['heyrin', 'monika', 'greeee'];
console.log("memberArray[2]", memberArray[2]);

let memberObject = {
    developer: 'heyrin',
    designer: 'monika',
    pm: 'greeee',
};
console.log("memberObject.developer", memberObject.developer);
console.log("memberObject['designer']", memberObject["designer"]);

// property 값 변경 
memberObject["designer"] = "Rachel";
console.log("memberObject['designer']", memberObject["designer"]);

// property 값 삭제 
delete memberObject.pm
console.log("memberObject", memberObject);
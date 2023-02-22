// Narrowing 시 type of 연산자로는 부족할 때
function narrowFunc(a) {
    // 1. && 연산자로 null, undefined 타입 체크하기
    if (a && typeof a === "string") {
    }
}
function animalFunc(animal) {
    // 2. in키워드로 object narrowing가능
    // 속성명 in 오브젝트 자료
    if ("swim" in animal) { // FishType 타입인지 검사가능
        animal.swim;
    }
}
// 3. instanceof 연산자로 object narrowing 가능
// 오브젝트 instanceof 부모 class
let date = new Date();
if (date instanceof Date) {
}
function vehicle(x) {
    if (x.wheel === "4개") {
        console.log('the car is ' + x.color);
    }
    else {
        console.log('the bike is ' + x.color);
    }
}
// 4. object 타입마다 literal type 만들어주면 narrowing이 편함

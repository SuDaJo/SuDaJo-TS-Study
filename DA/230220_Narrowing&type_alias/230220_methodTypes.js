let exMethod = function (a) {
    return 10;
};
let User = {
    name: "kim",
    age: 30,
    plusOne(a) {
        return a + 1;
    },
    changeName: () => {
        console.log('hi');
    }
};
User.plusOne(1);
User.changeName();
let cutZero = function (a) {
    let result = a.replace(/^0/, "");
    return result;
};
let removeDash = function (x) {
    let replaceDash = x.replace(/-/, "");
    return parseInt(replaceDash);
};
function makeFunc(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}
makeFunc('010-1111-2222', cutZero, removeDash);

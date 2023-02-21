// Object 타입 지정방법
/*
1. type 키워드로 타입변수 생성가능
2. interface 키워드로 타입변수 생성가능
*/
let square = { color: "red", width: 100 };
let student = { name: "kim" };
let teacher = { name: "kim", age: 20 };
let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
let 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
let myObj = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
};

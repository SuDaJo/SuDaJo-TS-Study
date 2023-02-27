// index signature을 사용 하면 Object 타입 한번에 지정 가능
let ObjUser = {
    name: "kim",
    age: "28",
    location: "seoul",
};
let ObjUserNum = {
    // 속성이름이 숫자인 경우?
    0: "dada",
    1: "20",
};
// object자료가 4중첩 5중첩 X중첩되어도 대응가능 
let css = {
    "font-size": {
        "font-size": {
            "font-size": 14
        }
    }
};
let obj = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
let obj2 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};

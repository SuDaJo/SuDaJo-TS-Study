var person = { student: true, age: 20 };
// function 함수({ student, age }: { student: boolean, age: number }) {
//   console.log(student, age);
// }
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function maxNumber() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    num.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
function objFunc(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
objFunc({ user: 'kim', comment: [3, 5, 4], admin: false });
function arrayFunc(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
arrayFunc([40, 'wine', false]);
function 함수(animal) {
    if ('swim' in animal) {
        animal.swim;
    }
}
function 함수(x) {
    if (x.wheel === '4개') {
        console.log('이 차는 ' + x.color);
    }
    else {
        console.log('이 바이크는 ' + x.color);
    }
}
// class User {
//   public name :string; // public은 기본으로 부여됨(생략 가능)
//   familyName :string = 'Jo';
//   constructor(a) {
//     this.name = a;
//   }
// }
// // {name : a, familyName : 'Jo'} 객체를 만드는 class이다.
// new User('ming');
// // {name : ming, familyName : 'Jo'} 생성
// class User {
//   name :string;
//   private familyName :string = 'Jo';
//   constructor(a) {
//     this.name = a + this.familyName;
//   }
// }
// new User('ming');
// // {familyName : 'Jo', name : mingJo} 생성
// 해당 class 밖에서 private 값을 수정할 일이 생긴다면?
// class User {
//   name :string;
//   private familyName :string = 'Jo';
//   constructor(a) {
//     this.name = a + this.familyName;
//   }
//   changeFamilyName() {
//     this.familyName = 'Lee';
//   }
// }
// let user = new User('ming');
// user.changeFamilyName();
// public 잘 쓰면 constructor 생략 가능
// class Person {
//   constructor(public name) {
//   }
// }
// new Person()

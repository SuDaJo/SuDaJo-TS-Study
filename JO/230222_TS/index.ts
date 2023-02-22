let person = { student: true, age: 20 };
type PersonType = { student: boolean; age: number };

// function 함수({ student, age }: { student: boolean, age: number }) {
//   console.log(student, age);
// }
function 함수({ student, age }: PersonType) {
  console.log(student, age);
}

함수({ student: true, age: 20 });

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function maxNumber(...num: number[]): number {
  let result = 0;
  num.forEach((i) => {
    if (result < i) {
      result = i;
    }
  });
  return result;
}

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
type ObjType = {
  user: string;
  comment: number[];
  admin: boolean
};

function objFunc({ user, comment, admin } :ObjType) :void {
  console.log(user, comment, admin)
}

objFunc( { user : 'kim', comment : [3,5,4], admin : false } )


// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
type ArrayType = (number | string | boolean)[];
// 타입지정할 때 이 두개의 차이 확인할 것
type ArrayType2 = [number, string, boolean];

function arrayFunc([a, b, c] :ArrayType) :void {
  console.log(a, b, c)
}

arrayFunc( [40, 'wine', false] )


// Narrowing

type Fish = {swim :string}
type Bird = {fly :string}

function 함수(animal :Fish | Bird) {
  if ('swim' in animal) {
    animal.swim
  }
}

// 비슷하게 생긴 오브젝트 Narrowing
// 속성명 같음 -> in 키워드 불가능
// 부모Class 없음 -> instanceof 불가능
// 애초에 같은 type으로 만들면 될듯
// 하지만 굳이 구분을 해야한다면?
// literal type으로 구분
type CarType = {
  wheel : '4개', // literal type
  color : string
}
type BikeType = {
  wheel : '2개', // literal type
  color : string
}

function 함수(x : CarType | BikeType){
  if (x.wheel === '4개'){
    console.log('이 차는 ' + x.color)
  } else {
    console.log('이 바이크는 ' + x.color)
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
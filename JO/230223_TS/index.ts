// // protected
// class User {
//   protected x = 10;
// }

// // user 클래스의 속성을 상속받는다.
// class NewUser extends User {
//   doThis() {
//     this.x = 20;
//   }
// }

// // static
// class User {
//   static x = 10;
// }

// let user = new User();
// // console.log(user.x); // error
// // console.log(User.y); // error

// class User {
//   static skill = 'js'; // 자식이 물려받지 못하게 됨
//   // intro = this.skill + '전문가입니다'; // error
//   intro = User.skill + '전문가입니다';
// }

// let 철수 =  new User();
// console.log(철수);

// User.skill = 'ts'; // 여기서부터는 'ts 전문가입니다'가 됨

// let 철수2 =  new User();
// console.log(철수2);


// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
// 누가 쓸 수 있고, 어디서 수정할 수 있는지
class User1 {
  private static x = 10;
  public static y = 20;
  protected z = 30;  // 해당 class 내부 + extends된 class 내부
}

/*
1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 x와 y에는 static 키워드가 붙었기 때문에 `User.x` 이런 식으로만 접근해서 쓸 수 있습니다.
User의 인스턴스는 x와 y를 쓸 수 없습니다.

2. private static x는 class 내부에서만 수정가능합니다. 

3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯 

4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 
약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다. 
*/

// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class User2 {
  private static x = 10;
  public static y = 20;

  static addOne(num :number) {
    User2.x += num;
  }

  static printX() {
    console.log(User2.x)
  }
}
User2.addOne(3) //이렇게 하면 x가 3 더해져야함
User2.addOne(4) //이렇게 하면 x가 4 더해져야함
User2.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함


// (숙제3) 네모.draw()를 할 때마다 랜덤한 위치에 사용자가 입력한 사이즈의 사각형 그리기
// (index.html 내부)
// <body>
//   <script src="index.js"></script>
// </body>

class Square {
  constructor(public width :number, public height :number, public color :string) {
  }

  draw() {
    let a = Math.random();
    let square = `<div style="
      position:relative;
      top:${a * 400}px;
      left:${a * 400}px;
      width:${this.width}px;
      height:${this.height}px;
      background:${this.color}"
      ></div>`
    document.body.insertAdjacentHTML('beforeend', square);
  }
}

let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()


// import export
// import {이름, 나이, Name} from './a'

let 변수 :Name = 'park';

/*
namespace
예전 ts에서 import 해오던 문법임
import export 없을 때 서로 다른 script 파일에서 변수명 겹치고 난리였음
namespace라는 object 형태 안에 타입 변수를 넣어서 꺼내쓸 수 있다.
옛날 옛적엔 module 키워드를 썼었는데 namespace 키워드로 바뀜
es6 버전이 나온 이후로 import as 키워드로 나름 namespace 와 유사하게 중복문제를 해결가능해서 namespace는 그렇게 많이 쓰이진 않음
*/

// 예전 ts에서 import 해오던 문법임
/// <reference path="./a.ts" />
// 이거 왜 에러나는지 확인할 것
// let 변수2 :네임스페이스.Name = 'kim';

// let 이름 :MyNamespace.NameType = '민수';
// let 나이 :MyNamespace.PersonInterface = { age : 10 };
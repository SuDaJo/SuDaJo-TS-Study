class ClassUser {
  // protected -> private과 매우 유사! class{안에서만 사용가능}
  // 차이점 :
  // private은 해당 class{} 안에서만 사용 가능하고
  // protected는 extends 된 class{} 안에서도 사용 가능 
  // protected extends된 class는 사용가능, 자식들 사용 불가능
  protected x = 10;
}

class NewUser extends ClassUser {
  doThis() {
    this.x = 20;
  }
}

let man = new NewUser();
console.log(man) // NewUser { x: 10 }


class User2 {
  // static -> 부모 클래스에 직접 부여되기 때문에 부모만 쓸 수 있음
  // 자식들에게 상속되지 않는다
  // private / protected / public + static 동시사용 가능
  public static x = 10;
  y = 20;
}

let babyUser = new User2();
console.log(babyUser); // User2 { y: 20 }
// console.log(babyUser.x); // undefined
console.log(User2.x) // 10
// console.log(User2.y) // undefined -> 필드 값은 자식만 사용 가능하기 때문에



/* static 활용예시 */
class User3 {
  static skill = "js"
  intro = User3.skill + "전문가입니당"
}

let dadaKim = new User3();
console.log(dadaKim) // User3 { intro: 'js전문가입니당' }

User3.skill = "ts"

let dadaKim2 = new User3();
console.log(dadaKim2) // User3 { intro: 'ts전문가입니당' }


/* QUIZ */
/* 
(숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요. 
친구가 물어봤을 때 어떻게 답해줄 것입니까
*/
class User4 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

/*
1. 필드 값은 원래 모든 User4의 자식들에게 물려주는 속성이지만 x,y에는 static 키워드가 붙어있어서
User4.x이런식으로만 접근해서 사용가능하고 User4의 자식들은 x,y를 사용할 수 없다.

2. private static이 붙어있는 x는 class 내부에서만 수정 가능

3. public static이 붙어있는 y는 class 내부 외부 상관 없이 수정 가능 하고, public 키워드 지워도 똑같이 동작예정

4. protected가 붙어있는 z는 private와 유사하게 class 내부에서만 사용이 가능한테 확장이 가능하여 
extends로 복사한 class 내부에서도 사용 가능함 
*/

/* 
(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 
그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
(조건) private static x = 10; 이 코드 수정금지
*/

class User5 {
  private static x = 10;
  public static y = 20;

  static  addOne(a :number) {
    User5.x += a;
  }
  static printX() {
    console.log(User5.x)
  }
}

User5.addOne(3) //이렇게 하면 x가 3 더해져야함
User5.addOne(4) //이렇게 하면 x가 4 더해져야함
User5.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함


/*
(숙제3) 이런거 어떻게 만들게요 
웹 요소 애니메이팅하는거 이런 것의 기초 격인데 
let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
이렇게 네모.draw()를 할 때마다
index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.

▲ 저는 네모.draw() 이걸 8번 적고 새로고침 해봤더니 8개의 박스가 생기네요
Square라는 class를 어떻게 만들면 될까요? 
html css 기초학력이 흔들리는 분들은 좌절을 느낄 수 있는데 생각보다 별거 아닙니다. 
그리고 심심하면 타입지정도 해봅시다.
*/

class Square{
  constructor(
    public width :number,
    public height :number,
    public color : string
  ){}
  draw(){
    let random = Math.random();
    let makeSquare = `
    <div style="position:relative; 
    top:${random * 400}px; 
    left:${random * 400}px; 
    width:${this.width}px; 
    height : ${this.height}px; 
    background:${this.color}"></div>
    `;
    document.body.innerHTML += makeSquare;
  }
}

let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()
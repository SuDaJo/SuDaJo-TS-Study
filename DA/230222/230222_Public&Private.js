// TS의 장점 : 객체지향언어 같은 문법도 제공한다
// ex) public private protected static
class Users {
    constructor(a) {
        this.familyName = "kim"; // 자식이 실수로 familyNam을 변경하는 것을 막을 수 있음
        this.name = a + this.familyName;
    }
    newFunc() {
    }
    // class 밖에서 familyNam을 수정 하고 싶을 때
    changName() {
        this.familyName = "Lee";
    }
}
let user1 = new Users("dada");
// user1.name = "헤헤";
// public -> public 안붙여도 원래 되긴 함 / public 키워드가 숨겨져 있다고 생각하면 됨
// private -> Property 'name' is private and only accessible within class 'Users'.
console.log(user1); // Users { familyName: 'kim', name: 'dadakim' }
// class 안에 변경함수 제작 후 자식에서 함수 사용 하면 private도 변경이 가능
user1.changName();
console.log(user1); // Users { familyName: 'Lee', name: 'dadakim' }
// public 키워드 사용시 : this.~~ 생략 가능
// ,로 여러개 설정도 가능
/*
(
  public name : string,
  public familyName : string
)...  */
class exPerson {
    constructor(name) {
        this.name = name;
    }
}
let childPerson = new exPerson("dyadya");
console.log(childPerson); // exPerson { name: 'dyadya' }

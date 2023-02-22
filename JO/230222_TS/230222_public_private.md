# Class에서 유용한 public, private

필드값과 constructor 내부에 지정한 값 비교
```typescript
class User {
  name = 'kim'; // 정적인 필드값
  // User에서 생성된 객체는 모두 'kim'이라는 고정값을 갖는다.

  constructor(a) {
    this.name = a; // 객체 생성 시 매개변수로 동적인 값 생성 가능
  }
}

new User('Jo');
```

## public
기본적으로 public 값이 부여되기 때문에 생략 가능하다.

### public 잘 쓰면 constructor 생략 가능
```typescript
class Person { 
  name;
  constructor ( name :string ){  
    this.name = name;
  } 
}
let 사람1 = new Person('john')

// 위와 같은 코드임
class Person { 
  constructor ( public name :string ){  
    // this.name = name;
    // 생략 가능해짐
  } 
}
let 사람1 = new Person('john')
```


<br>

## private
해당 class 안에서만 수정/사용이 가능하게 한다.

외부에서 수정되면 안되는 변수나 속성에 사용

```typescript
class User {
  name :string;
  private familyName :string = 'Jo';

  constructor(a) {
    this.name = a + this.familyName;
  }
}

new User('ming');
// {familyName : 'Jo', name : mingJo} 생성
```

### 해당 class 밖에서 private 값을 수정할 일이 생긴다면?
미리 class에 변경할 수 있게 하는 함수를 만들어두기

```typescript
class User {
  name :string;
  private familyName :string = 'Jo';

  constructor(a) {
    this.name = a + this.familyName;
  }

  // private 값을 변경할 수 있는 메서드
  changeFamilyName() {
    this.familyName = 'Lee';
  }
}

let user = new User('ming');
user.changeFamilyName();
```
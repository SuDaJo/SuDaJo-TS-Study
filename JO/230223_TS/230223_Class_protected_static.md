# class에서 사용가능한 protected, static 키워드

## protected
- `현재 class { } 내부` + `extends된 class { } 내부`에서 사용 가능
- extends 된 class만 protected된 속성 사용 가능
- 자식 인스턴스는 사용 불가능함

```typescript
class User {
  protected x = 10;
}

// user 클래스의 속성을 상속받는다.
class NewUser extends User {
  doThis() {
    this.x = 20;
  }
}
```

### protected와 private 비교

`protected` : extends된 class는 사용가능⭕ / 자식 인스턴스는 사용 불가능❌

`private` : extends된 class 사용 불가능❌ / 자식 인스턴스 사용 불가능❌

> 부모 자식 class 끼리 공유할 수 있는 속성을 만들고 싶으면 `protected` 사용하고, 하나의 class 안에서만 쓸 수 있는 속성을 만들고 싶으면 `private` 사용

<br>

## static
- 원래 class { } 안에 집어넣는 변수, 메서드는 전부 class로 부터 새로 생성되는 인스턴스(instance)에 부여된다.
- static 키워드를 붙이면 부모 class에 직접 속성 부여할 수 있다.
- 자식 인스턴스들은 해당 속성을 갖지 못한다.
- extends 하면 static 키워드가 붙은 속성도 함께 복사된다.
- `private` / `protected` / `public` 과 동시에 부여 가능

### static 언제씀?
> 주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나, class로부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용

```typescript
class User {
  static x = 10; // User class만 가짐
  private static y = 10; // 이렇게 결합해서 사용 가능
  y = 20;
}

let 자식 = new User();
console.log(자식.x); // error
console.log(User.x); // 가능

console.log(자식.y); // 가능
console.log(User.y); // error
```
아래 예시는 설명을 위한 것

```typescript
class User {
  static skill = 'js'; // 자식이 물려받지 못하게 됨
  // intro = this.skill + '전문가입니다'; // error
  intro = User.skill + '전문가입니다';
}

let 철수 =  new User();
console.log(철수);

User.skill = 'ts'; // 여기서부터는 'ts 전문가입니다'가 됨

let 철수2 =  new User();
console.log(철수2);
```

class 내부의 데이터를 이런 식으로 수정할 일은 별로 없다. 수정하고 싶으면 private 쓰고 class 내부에 수정함수를 만들어서 사용하는게 더 안전한 방법!
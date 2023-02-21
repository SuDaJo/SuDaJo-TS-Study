# Class에 타입 지정하기

### 필드 값
class 내부에는 모든 자식 object들이 사용가능한 속성을 만들 수 있다.

TypeScript에서 constructor 내부에 `this.속성`을 사용하려면 필드값에 먼저 지정을 해야 한다.

```typescript
class Person {
  data = 0; // 필드값
}

let john = new Person();
let kim = new Person();

console.log(john.data);
console.log(kim.data); 
```

- 필드값에도 type 지정
- constructor의 파라미터에도 type 지정
- constructor의 return 값은 항상 object 자료형이기 때문에 type 지정 필요 없음

```typescript
class Person {
  name :string;

  constructor(a :string) {
    this.name = a;
  }

  함수(a :string) {
    console.log("안녕" + a);
  }
  // Person.prototype.함수 = function() { }
  // class 내부 메서드는 해당 class의 prototype에 추가된다.
}

let 사람1 = new Person("Jo");
let 사람2 = new Person("kim");
```

Q. 필드값이랑 constructor랑 뭔 차이?

- 일반적으로 비슷하다.
- 인스턴스를 생성하면서 동적으로 값을 받아 초기화하려면(ex. `new Person("Jo")`) constructor를 사용해야 한다.
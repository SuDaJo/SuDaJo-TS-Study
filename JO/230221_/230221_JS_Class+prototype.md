# JavaScript의 Class 문법

Class는 object instance를 뽑는 틀이다.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("kim", 20);
const person2 = new Person("Lee", 28);
```

![image](https://user-images.githubusercontent.com/112460344/220264413-494aa537-35c3-41da-ae7d-664fcc320504.png)

<br>

# JavaScript의 prototype
객체가 가진 유전자 같은 것👩‍🔬
> 어떤 객체에서 데이터를 찾을 때 맞는 데이터가 없을 경우 부모의 유전자, 조부모의 유전자에 있는지 찾는다.

object 자료형의 key에 해당하는 프로퍼티가 없을 경우 부모의 프로퍼티 > 조부모의 프로퍼티 등 해당하는 프로퍼티를 찾을 때까지 찾는데 이를 `프로토타입 체인(prototype chain)`이라고 한다.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("kim", 20);
const person2 = new Person("Lee", 28);

Person.prototype.hobby = "coding"

person1.hobby // person1은 hobby 속성을 가지고 있지 않지만 부모 class의 prototype에 있기 때문에 coding 출력
```

### 배열 자료형에 배열 메서드를 당연하게 쓸 수 있는 이유

```javascript
const array = [1, 2, 3]; // 이렇게 배열을 만들면
const array = new Array(1, 2, 3); // 컴퓨터는 이렇게 해석함

```
Array 라는 객체 생성 기계가 있는 것이다.
Array 생성자 함수!
```javascript
new String()
new Number()
new Array()
new Object()
new Date()
.
.
.
```

`Array.prototype`을 출력해보면 Array 객체가 가진 메서드들이 정의되어 있다.
- length, pop, map, sort.... 등
- `Array.prototype.sort()` 이런식으로 정의되어 있음

```javascript
Array.prototype.함수 = function() {
  console.log("prototype에 직접 만든 함수 추가하기~");
}

const array = [1, 2, 3];

array.함수(); // 부모 객체인 Array에 정의된 함수를 사용할 수 있게 된다.
array.함수2(); // error
```

![image](https://user-images.githubusercontent.com/112460344/220269623-ac00d9c5-0e53-4d86-8a5c-58f29d1990cc.png)
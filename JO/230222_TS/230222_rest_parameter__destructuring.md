# rest parameter, destructuring
나머지 매개변수와 구조분해할당

<br>

## `...` rest parameter
나머지 매개변수 `...`
- 매개변수가 몇개 들어올지 불확실 할 때 나머지 매개변수를 사용하여 여러 개의 매개변수를 array로 받을 수 있다.
- 나머지 매개변수와 일반 파라미터를 같이 넣을 경우, 나머지 매개변수가 제일 뒤에 위치해야 한다.
- 나머지 매개변수의 타입 지정은 `array`로 해야한다.
```typescript
function 함수(...a :number[]) {
  console.log(a);
}

함수(1, 2, 3, 4, 5, 6)
```

<br>

## `...` Spread 문법
array나 object 자료형 앞에 `...` Spread 문법을 사용하면 안에 있는 자료를 펼쳐서 나열할 수 있다.
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr1, ...arr2];

// arr3은 아래의 모습이 된다.
arr3 = [1, 2, 3, 4, 5];
```

<br>

❗ `rest parameter`와 `Spread 문법`은 형태가 같지만 쓰임이 전혀 다르다.
- 여러 개의 파라미터를 의미하는 `...rest`는 함수 선언할 때 매개변수 자리에!
- 괄호벗겨주는 `...spread`는 array, object 자료 왼쪽에!

<br>

## destructuring

```javascript
let arr = ['안녕', 100];

// 위의 arr 자료를 변수로 빼서 사용하고 싶을 경우
let 변수1 = arr[0];
let 변수2 = arr[1];

// destructuring
let [변수1, 변수2] = ['안녕', 100];
// 변수를 2개 선언+할당한 것과 같은 결과가 나온다.
```

Object의 destructuring

```javascript
let { student, age } = { student : true, age : 20 };

// 정확히는 아래의 형태가 되어야 함
// 신문법에서 좌우가 같으면 생략할 수 있음
let { student : student, age : age } = { student : true, age : 20 };
```
```javascript
let obj = { student : true, age : 20 };

function 함수(a, b) {
  console.log(a, b);
}

함수(obj.student, obj.age);

// destructuring
function 함수({ student, age }) {
  console.log(student, age);
}

함수({ student : true, age : 20 });
함수(obj); // object 그 자체를 넣을 수 있게 된다.
```

### destructuring 매개변수에 타입 지정하기
```typescript
type PersonType = { student: boolean, age: number };
let person = { student: true, age: 20 };

function 함수({ student, age } :PersonType) {
  console.log(student, age);
}

함수(person);
```

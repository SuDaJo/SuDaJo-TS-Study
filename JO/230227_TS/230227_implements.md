# interface + implements 키워드로 class 타입을 확인하기 

- interface 키워드는 object 타입지정할 때 쓴다.
- `implements` 키워드도 필요
-  implements는 class의 타입을 체크하는 용도지 ❗타입을 지정하지 않는다.
    ```typescript
    interface CarType {
      model : string,
      tax : (price :number) => number;
    }

    class Car implements CarType {
      model;   // any 타입됨
      tax (a){   // 파라미터 a는 any 타입됨 
        return a * 0.1
      }
    }
    ```


```typescript
interface CarType {
  model : string,
  price : number
}

// implements 키워드 사용
class Car implements CarType {
  model : string;
  price : number = 1000;
  constructor(a :string){
    this.model = a
  }
}
let 붕붕이 = new Car('morning');
```
이 class가 이 interface에 있는 속성을 갖고 있는지 확인 가능

implements 키워드로 class의 타입을 체크하고 타입 지정이 필요하면 추가로 해주어야 한다.
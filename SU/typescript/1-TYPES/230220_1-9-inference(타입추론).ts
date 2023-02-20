{
  // 아래와 같이 타입스크립트에서는 text에 따로 string이라고 명시해주지 않아도
  // 선언을 해줄때 string으로 선언을 해주었기 때문에 자동적으로 타입이 string으로 정해집니다.
  let text = "hello";
  text = "hi";
  // text = 1 XXXXX

  // 함수에서는 아래와 같이 인자에 타입을 지정해주지 않게되면 자동적으로 any라고 지정해주게 됨.
  // 따라서 함수에서는 타입을 지정해주거나 default 값을 지정해주도록 합니다.
  // 마찬가지로 default 값이 string이라면 자동적으로 타입스크립트는 인자를 string으로 정해줍니다.
  function print(message) {
    console.log(message);
  }

  print("hello");
  print(123);

  // 아래의 함수또한 x와 y가 모두 숫자이므로 add가 number를 리턴할것이라고 타입스크립트는 추론합니다.
  function add(x: number, y: number) {
    return x + y;
  }

  // 또한 아래의 경우도 add가 숫자를 리턴하므로 result의 타입은 number라고 타입스크립트가 추론합니다.
  const result = add(1, 2);

  // 우리의 예제에서는 간단한 코드들이라 한눈에 파악이 가능하지만 실제 프로젝트에서는 함수의 길이가 매우길어져 파악이 힘들어질 수 있습니다.
  // 따라서 타입추론에 의지하기 보다는 타입을 적어주는 습관을 들이는 것이 좋습니다.

  function add2(x: number, y: number): number {
    return x + y;
  }

  const result2: number = add(1, 2);
}

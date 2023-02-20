{
  // 함수에서 타입을 이용해봅시다
  // JavaScript
  // jsAdd()와 같이 함수의 길이가 짧은경우라면 한 눈에 파악이 가능하나 길이가 길어진다면 파악이 힘듬
  // 또한 number가 아닌 string이 전달 되어도 이를 리턴해줄 것이고 이는 우리가 원하는 결괏값이 아닐수도 있음.
  // jsAdd() 를 타입스크립트를 활용해 업그레이드 해봅시다.
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }
  // TypeScript
  // 아래와 같이 작성해주면 우리의 함수는 오롯이 숫자만을 받아 숫자만을 리턴합니다.
  // 또한 함수가 number를 리턴하는 것을 알려주었기 때문에 한눈에 파악하는 것 또한 용이함.
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
  // JavaScript
  // jsFetchNum() 은 굉장히 긴 code들을 실행하고 프로미스를 리턴합니다.
  // 그렇다면 우리는 이 함수가 무엇을 리턴하는지 알기위해 함수를 쭉 살펴보아야 합니다.
  // jsFetchNum 또한 타입스크립트를 통해 업그레이드를 해보겠습니다.
  // function jsFetchNum(id) {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  // TypeScript
  // Promise를 리턴하는 것을 알려주며 프로미스의 넘버타입으로 리턴하는 것을 알 수 있습니다.
  // 따라서 fetchNum 함수는 숫자를 fetch하는 함수이며 인자로는 id값을 받으며 id는 string이며 Promise를 리턴하는 것을 한 눈에 알 수 있습니다.
  // function fetchNum(id: string): Promise<100> {
  //   // code...
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  // 정리.
  // 1. 타입 정보를 기입함으로써 조금 더 높은 문서화 효과를 볼 수 있음.
  // 2. 함수가 하는 일을 직관적으로 한 눈에 파악이 가능함.
}

{
  // 함수의 다양한 활용

  // 1. printName
  function printName(firstName: string, lastName: string) {
    console.log(firstName);
    console.log(lastName);
  }

  // printName함수는 아래와 같이 인자 두개를 전달 해주어야만 함
  // 하지만 경우에 따라서 이름만 전달하고 싶을 수 있는데 이럴 때 사용가능한 것이 Optional parameter이다.
  printName("steve", "jobs");
  //printName("수현"); // 에러 출력

  // 1-1. Optional parameter
  function printName2(firstName: string, lastName?: string) {
    // 위와 같이 lastName뒤에 ? 를 붙이게 되면 인자로 전달하여도 되고 하지 않아도 됨을 의미한다.
    console.log(firstName);
    console.log(lastName);
  }

  printName2("수현"); // 에러가 나지 않으며 두번째 인자를 전달하지 않을경우 undefined를 반환함.

  // 2. Default parameter : 인자를 전달하지 않으면 기본으로 설정해준 값이 됩니다.
  function printMessage(message: string = "기본 메시지입니다.") {
    console.log(message);
  }

  printMessage("ㅋㅋ"); // ㅋㅋ을 출력
  printMessage(); // 기본 메시지입니다. 를 출력

  // 3. Rest parameter : ... 을 활용하여 전달하는 인자의 갯수를 지정하지 않고 배열의 형태로 전달받을 수 있음.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 5, 6, 8, 34));
}

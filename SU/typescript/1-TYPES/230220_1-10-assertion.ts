{
  // 타입을 강요해야할 때 type assertion을 사용하는데 결론만 말하자면 그리 좋은 방법은 아닙니다.
  // 불가피할 때만 사용하도록 합시다.

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  // result.length XXXX => 타입이 무엇인지 타입스크립트는 모르기때문에 문자열을 반환하더라도 문자열의 메서드를 사용할 수 없음.
  // 따라서 내가 문자열임을 확신한다 라고 알려주어야함

  console.log((result as string).length); // OOOOO
  console.log((<string>result).length); // OOOOO

  // 그러나 위의 jsStrFunc가 실제로는 숫자를 리턴하게 된다하더라도 에러가 나지않는데 이는 우리가 result에 들어가는 값이
  // string이라고 확신을 하여 알려주었기 때문에 에러를 뿜지 않습니다.
  // 따라서 type assertion은 내가 정말 그 타입을 확신할 수 있을때 사용하도록 합니다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; // 이렇게 함수에 붙이는 것도 가능.
  // 아래와 같이 ! 를 붙이게되면 값이 들어올 것임을 무조건적으로 확신한다고 볼 수 있음.
  numbers!.push(1);

  // assertion을 사용하였을 때 괜찮은? 경우는 아래와 같습니다.
  const button = document.querySelector(".class")!;

  button.nodeValue; // 버튼이 무조건 있다는 가정하에 이를 확신하므로 !를 붙여 이를 알려주도록 합니다.

  // 이렇게 되면 아래와같이 코드를 작성하지 않아도 됩니다.
  if (button) {
    button.nodeValue;
  }
}

{
  // 아래의 함수는 다양한 타입을 받아오지 못합니다.
  // number외의 다른 타입을 받아오려면 어떻게 해야할까요?
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 아래와 같이 any를 사용하여 arg의 타입을 지정할 수 있지만 문제는 타입이 보장되지 않는다는 것입니다.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result = checkNotNullBad(123);
  console.log(result);
  checkNotNullBad(null);

  const result2 = checkNotNullAnyBad(123); // 숫자가 any가 되어 더이상 타입이 안전하지가 않습니다.

  // 위의 두 경우를 모두 만족해주기 위해 generic을 사용하는데 generic은 다양한 타입을 받아올 수 있으며
  // 타입을 보장해줍니다
  // 아래와 같이 보통 T라는 키워드를 전달해주며 이를 읽을땐
  // 숫자를 전달하면 숫자가, 스트링을 전달하면 스트링이 리턴되는 제네릭함수구나 하고 생각하면 됩니다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result3 = checkNotNull(123); // 선언하는 순간 result3의 타입이 number로 정해집니다.
  const result4: boolean = checkNotNull(true); // 마찬가지로 선언하는 순간 result4의 타입이 boal로 정해집니다.
}

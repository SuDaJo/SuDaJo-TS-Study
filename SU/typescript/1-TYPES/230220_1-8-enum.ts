{
  // 여러가지의 관련된 상수값들을 한 곳에 모아 정의할 수 있게 도와주는 타입이 enum입니다.
  // JavaScript에는 존재하지 않습니다 따라서 관련된 상수일지라도 하나하나 정의해주어야 합니다.
  const MON = 0;
  const TUE = 1;
  const WED = 2;
  // 따라서 JS에서는 아래와 같이 enum과 비슷하게 사용할 수는 있습니다
  // freeze는 변경이 불가능하게 만들어줌.
  const DAYS_ENUM = Object.freeze({ MON: 0, TUE: 1, WED: 2 });

  // 1. enum
  // 아래와 같이 enum에 따로 값을 지정해주지 않으면 자동적으로 0부터 시작하여 값을 할당해줍니다.
  // 0부터 시작하지 않기를 원할땐 mon에 1이라는 값을 할당해주면 1부터 순차적으로 값을 할당함.
  // 또한 문자열을 할당할 수도 있는데 문자열의 경우 자동적으로 무슨 값이 들어갈지 알수없으므로 전부다 할당을 해주어야합니다.
  enum Days {
    mon, // 0
    tue, // 1
    wed, // 2 ....
    thr,
    fri,
    sat,
    sun,
  }
  console.log(Days.fri);
  const day = Days.sun;
  console.log(day);

  // 그렇다면 enum을 쓰게되었을때의 가장큰 문제점이 무엇일까요?
  let day2: Days = Days.sat;
  // 아래와 같이 day2의 값을 변경할 수 있게됩니다. 5라고 하였을땐 Days의 범위안이지만
  day2 = 5;
  // 범위 밖의 숫자를 입력해도 컴파일에러가 발생하지 않기때문에 enum을 쓰게되면 타입이 정확하게 보장되지 않습니다.
  day2 = 10;

  // 따라서 union type을 활용하여 enum을 대신하도록 합니다.
  type DaysOfWeek = "MON" | "TUE" | "WED";

  let day3: DaysOfWeek = "MON";
  // day3 = 'ㅋㅋ' XXXXX => 유니온 타입이기 때문에 지정된 값만 들어갈 수 있어 에러가 납니다.

  // 결론은 정말 필요한 경우가 아니라면 enum의 경우 대부분 union type으로 대체가 가능하므로 가능한 사용하지 않는것이 좋습니다.
}

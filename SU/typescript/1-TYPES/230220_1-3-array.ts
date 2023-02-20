{
  // 1. Array를 정의하는 방법
  // 두가지 방법의 차이점은
  const fruits: string[] = ["사과", "바나나"];
  const scores: Array<number> = [1, 2, 3, 4];

  // readonly
  function printArray(fruits: readonly string[]) {
    // readonly 를 붙여주게되면 전달받은 인자값은 함수내부에서 절대 변경할 수 없게됩니다.
    // fruits.push()  XXXXXX => readonly를 붙여주었음으로 값을 변경할 수 없음.
    // 이처럼 readonly는 string[] 와 같이 정의한 경우에만 사용할 수 있습니다.
    // 따라서 readonly를 붙여주기 위해선 string[] 와 같이 정의해야함으로 코드의 일관성을 지키고 싶다면 string[] 을 쓰는 것이 좋습니다.
  }

  // 2. Tuple : 서로다른 타입을 가질 수 있는 배열
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // Tuple을 사용하게 되면 위와 같이 배열에 어떤 데이터가 담겨있는지 직접 가서 확인을 해야하는 불편함이 있음
  // 따라서 Tuple은 나중에 배우게될 interface, tpye alias, class 로 대체해서 쓰도록함.
  // 그렇게 되면 student.name 과 같이 한 눈에 데이터 정보가 들어옴
  // Tuple은 주로 리액트에서 useState로 값을 받아올 때 쓰이기도 하는데 interface나 class로 대체가 불가능한 경우에만 사용하도록 합니다.
}

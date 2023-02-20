{
  // TypeScript의 장점중 하나는 type alias가 가능하기 때문입니다.
  // 이를 활용하면 굉장히 복잡한 타입도 정의를 할 수 있습니다.

  // 1. Type alias의 기본적인 형태
  type Text = string; // Type의 형태를 정의해줍니다.
  const name: string = "수현";
  const name2: Text = "수현"; // 우리가 정의한 Text가 string이므로 이런식으로 사용이 가능합니다.
  type Num = number;

  // 1-1. Type alias의 활용
  // 원시타입 뿐만아니라 오브젝트로도 정의가 가능하며 아래와같이 사용합니다
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    // animal : '사자' XXXXX => 우리가 Student라는 타입에 정의한대로 값을 넣어줘야 합니다.
    name: "수현",
    age: 12,
  };

  // 이렇듯 type alias는 우리가 원하는대로 타입을 정의하고 사용할 수 있습니다.

  // 2. String Literal Types
  type Name = "name";
  let suhyunName: Name;
  // suhyunName = '수현' XXXXX => Name 타입은 오로지 'name' 이라는 값이 들어가야합니다
  suhyunName = "name";
  type JSON = "json";
  const json: JSON = "json";
}

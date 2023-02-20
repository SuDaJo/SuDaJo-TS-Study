{
  // union은 발생할 수 있는 모든 케이스중에 한가지만 선택하는 것이었다면 intersection 은 그 모든것을 합한것을 말합니다.
  // 그렇기 때문에 intersection은 and와 같은 개념이라 생각하면 됩니다. 즉, union과 완전히 반대되는 성격

  // 1. intersection types: &
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    // 아래와 같이 person의 모든것에 접근이 가능해집니다.
    console.log(person.name, person.empolyeeId, person.work());
  }

  // 따라서 internWork함수를 사용할시에는 아래와같이 사용합니다.
  internWork({
    // 모든 정보들을 아래와 같이 적어주어야 하며 하나라도 안적을시 에러가 납니다.
    name: "수현",
    score: 1,
    empolyeeId: 331235,
    work: () => {},
  });
}

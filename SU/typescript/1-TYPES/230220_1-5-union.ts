{
  // Union Types: OR
  // union type은 데이터에 따라 값이 바뀔경우 사용합니다.
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  // 정의된 값들만 들어갈 수 있으며 여러가지 값들중 하나를 출력합니다.
  move("down");
  move("left");
  move("right");
  move("up");

  type TileSize = 8 | 16 | 32;
  // const tile: TileSize = 6 XXXXX => 정의된 값들 중 하나의 값만 들어갈 수 있습니다.
  const tile: TileSize = 16; // OOOOO

  // 1. union type 실전예제
  // 성공했을 때
  type SuccesState = {
    response: {
      body: string;
    };
  };

  // 실패했을 때
  type FailState = {
    reason: string;
  };

  // 함수에 바로 유니온 타입을 적용하기 보다는 따로 정의해서 사용해주도록 합시다.
  function login(): SuccesState | FailState {
    // ...
    return {
      response: {
        body: "로그인 성공",
      },
    };
  }

  type LoginState = FailState | SuccesState;

  function loginUpgrade(): LoginState {
    // ...
    return {
      response: {
        body: "로그인 성공",
      },
    };
  }

  // Quiz => printLoginState(state: LoginState)
  // 로그인 성공시 => 성공! body
  // 로그인 실패시 => 실패 reason

  function printLoginState(state: LoginState) {
    // 리스폰스라는 것이 state안에 있다면
    // 그러나 아래와같이 in을 사용하는 것은 그리 좋은방법은 아닙니다.
    // 이어지는 챕터에서 Discriminated union을 통해 이를 바꾸어보도록 합시다.
    if ("response" in state) {
      console.log(`성공! ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}

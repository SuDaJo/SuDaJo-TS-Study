{
  // Discriminated union => 유니온 타입에 차별화되는 이름이 동일한 타입을 둠으로써 간편하게 구분이 가능함

  type SuccesState = {
    // 각 유니온 타입에 result라는 동일한 키를 두고 어떤 스테이트냐에 따라서 다른타입이 지정됩니다.
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = FailState | SuccesState;

  function loginUpgrade2(): LoginState {
    return {
      result: "success",
      response: {
        body: "로그인 성공",
      },
    };
  }

  function printLoginState2(state: LoginState) {
    state.result; // success or fail => result라는 값을 state가 공통적으로 가지고있기때문에 이를 기준으로 코드를 바꿉니다.
    if (state.result === "success") {
      console.log(`성공! ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }

  // 정리하자면 공통적인 값을 가지고 그 값을 기준으로 어떤 행동을 취해주는 것이 이 챕터의 핵심입니다.
}

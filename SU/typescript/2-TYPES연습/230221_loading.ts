{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState3(state: ResourceLoadState) {
    if (state.state === "loading") {
      console.log("👀 loading...");
    } else if (state.state === "success") {
      console.log(`😃 ${state.response.body}`);
    } else if (state.state === "fail") {
      console.log(`😱 ${state.reason}`);
    }
  }

  printLoginState3({ state: "loading" }); // 👀 loading...
  printLoginState3({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState3({ state: "fail", reason: "no network" }); // 😱 no network
}

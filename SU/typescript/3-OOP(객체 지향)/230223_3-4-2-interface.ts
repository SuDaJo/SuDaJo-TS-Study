{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface는 일종의 게약서같은 것이라고 생각하면 됩니다.
  // class이름과 똑같이 하여도 상관없지만 구분을 위해 interface이름을 좀 더 간편하게 하고
  // class이름에 차별을 두는 것도 좋습니다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 그뒤 우리의 커피머신은 coffeMaker의 규격을 따른다고 아래와 같이 implements 키워드를 이용해 알려주도록 합니다.
  // 그렇게되면 우리가 interface안에 선언해둔 모든함수를 class안에 구현을 해야합니다.
  // 만약 makeCoffee라는 interface에서 선언한 함수가 없다면 에러가 출력됩니다.
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;

    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩의 수는 0보다 커야합니다.");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number) {
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  // maker2는 coffemaker에 따라 만들어진 것이기 때문에 더이상 fillCoffebenas를 사용할 수 없게됩니다.
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(32); XXXXX
  maker2.makeCoffee(2);
}

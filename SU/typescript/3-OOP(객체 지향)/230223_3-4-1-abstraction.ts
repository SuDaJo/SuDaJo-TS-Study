{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;

    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩의 수는 0보다 커야합니다.");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
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
      // 커피기계로 커피를 뽑기위해선 아래와 같은 동작을 순서대로 해야한다고 가정해봅시다.
      // 이를위해 따로 함수를 만들어주었습니다.
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 커피 기계를 구매하고
  const maker = CoffeeMaker.makeMachine(32);
  // 콩을 채운 뒤
  maker.fillCoffeeBeans(32);
  // 커피를 만들려고 하면 많은 함수가 maker. 뒤에 자동완성 되는 것을 알 수 있습니다.
  // 그렇게되면 커피를 만들기위해 먼저 호출해야 할 것이 무엇인지 알 수 없을수도 있는데 이 때
  // abstraction(추상화)를 활용하면 됩니다. 이를위해 makeCoffee안에 들어가는 함수앞에 private 키워드를 붙여주면
  // 더이상 그 함수들은 외부에서 사용할 수 없기때문에 사용자가 우리의 class를 사용할 때 확실하게 알 수 있게 됩니다.
  maker.makeCoffee(2);
}

// if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
//   throw new Error("Not enough coffee beans!");
// }
// this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
// return {
//   shots: shots,
//   hasMilk: false,
// };

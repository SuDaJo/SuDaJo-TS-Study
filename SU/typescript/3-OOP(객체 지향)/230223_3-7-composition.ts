{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // Composition에 대해 다루기전에 상속의 문제점에 대해 알아봅시다.
  // 상속의 문제점은 수직적으로 상속이 이루어진다는 것입니다.
  // 즉, 부모 class를 수정하면 해당 class를 상속받은 모든 자식들에게 영향을 끼칠 수 있게 되는 것입니다.
  // 또한 우리의 예제에서 우유와 설탕이 들어가는 커피기게를 만들고싶다면 두가지 모두 상속받으면 되지않을까? 라고 생각할 수 있지만
  // 타입스크립트에서는 한가지의 class만 상속받을 수 있고 그 이상 상속받는 것은 불가능합니다.

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;

    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
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

    clean() {
      console.log("기계를 청소중입니다");
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("우유를 스팀중입니다");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "ssee"),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "ssee"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((item) => {
    console.log("-------------------");
    item.makeCoffee(1);
  });
}

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // 이번 파일에서는 다형성에 대해 다루도록 하겠습니다.

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

  // 이번에는 설탕이 들어가는 커피머신을 만들어보겠습니다.
  // 이처럼 하나의 클래스를 여러 자식들이 상속받아 다양한 class를 만들 수 있습니다.
  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  // 모든 커피 기계들은 결국 coffemachine로부터 나왔고 coffemachine는 coffeemaker의 interface로 작동하므로
  // machines 또한 CoffeeMaker를 타입으로 받을 수 있습니다.
  // 그렇게 되면 CoffeeMaker interface에 있는 단 하나의 함수만 사용할 수 있게 됩니다.
  // 그렇게 되면 각각의 class에 구현된 함수는 신경쓰지 않고 약속된 한가지의 함수만을 사용하면 되므로
  // 사용하는 사람의 입장에선 굉장히 편해질 수 있는 것입니다.
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

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // 상속 대신 composition을 사용하여 코드를 업그레이드 해보도록 하겠습니다.
  // 상속이 안좋은건 아니지만 깊이가 깊어지면 문제가 될 수 있습니다!

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

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      // 두줄밖예 없지만 굉장히 복잡한 로직이 있는 함수라고 가정
      console.log("우유를 스팀중입니다");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk;
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      // 두줄밖예 없지만 굉장히 복잡한 로직이 있는 함수라고 가정
      console.log("설탕을 가져오고 있습니다");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // 아래와 같이 우유가 필요하다면 milkFother와 같이 우리의 우유 거품기 를 받아와서 사용하며,
    // 각 기능이 필요한 class가 있다면 로직을 추가해주는 것이 아닌 우리가 만들어둔 외부의 함수를 컴포지션을 이용해
    // 아래와 같이 사용해주면 더 나은 코딩을 할 수 있습니다.
    constructor(private beans: number, public readonly serialNumber: string, private milkFother: CheapMilkSteamer) {
      super(beans);
    }
    // 이제는 아래와 같이 각 기계에서 설탕과 우유가 필요할 때마다 로직을 작성해주는 것이아니라
    // private steamMilk(): void {
    //   console.log("우유를 스팀중입니다");
    // }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // 아래와 같이 milkFother에 있는 우리가 만들어둔 makeMilk함수를 사용해 커피를 전달해주면
      // 우유가 들어있는 커피를 리턴해줍니다.
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugarFother: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugarFother.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(private beans: number, private milkFother: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milkFother.makeMilk(sugarAdded);
    }
  }
}

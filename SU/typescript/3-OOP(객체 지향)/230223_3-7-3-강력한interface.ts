{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

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

  class CheapMilkSteamer {
    private steamMilk(): void {
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

  class AutomaticSugarMixer {
    private getSugar() {
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
    constructor(private beans: number, public readonly serialNumber: string, private milkFother: CheapMilkSteamer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
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

  const cheapMilkMaker = new CheapMilkSteamer();
  const sugarMaker = new AutomaticSugarMixer();
  const sweetMachine = new SweetCoffeeMaker(12, sugarMaker);
  const latteMahcine = new CaffeLatteMachine(12, "sse11", cheapMilkMaker);
  // const sweetCaffeLatteMachine = new SweetCaffeLatteMachine(12);
}

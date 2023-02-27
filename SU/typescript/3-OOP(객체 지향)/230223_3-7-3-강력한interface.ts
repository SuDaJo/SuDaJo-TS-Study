{
  // 이전의 코드들은 class들끼리 밀접하게 연관이 되어있어서 우유 거품제조기를 바꾸고자하면
  // 모든 class에 거품제조기를 갈아끼워야하는 불편함이 있었습니다.
  // 이번 파일에서는 이를 업그레이드 해보겠습니다.

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

    constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkFrother {
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

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("비싼우유를 스팀중입니다");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk;
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class VeryFancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("비싼우유를 스팀중입니다");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk;
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class AutomaticSugarMixer implements SugarProvider {
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

  class SuperSugarMixer implements SugarProvider {
    private getSugar() {
      console.log("비싼 설탕");
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

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const veryFancyMilkSteamer = new VeryFancyMilkSteamer();

  const sugarMaker = new AutomaticSugarMixer();
  const fancySugar = new SuperSugarMixer();

  // Sugar
  // const sweetSugarMachine = new SweetCoffeeMaker(12, sugarMaker);
  // const fancySugarMachine = new SweetCoffeeMaker(12, fancySugar);

  // const latteMahcine = new CaffeLatteMachine(12, "sse11", cheapMilkMaker);
  // const coldLatteMachine = new CaffeLatteMachine(12, "sse11", veryFancyMilkSteamer);
  // const sweetCaffeLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, sugarMaker);
}

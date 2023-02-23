{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface를 좀 더 활용해보도록 합시다.

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 아래와 같이 여러가지 interface 규약을 따를수도 있습니다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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

    test() {
      console.log("zz");
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  // CoffeeMachine의 makeMachine 함수를 이용하면 커피머신 오브젝트를 이용할 수 있으며
  // 타입을 우리가 지정한 interface로 받게되면 interface에서 정의된 함수들에만 접근이 가능합니다.
  // 따라서 CoffeMachine에 있는 test함수에는 접근이 불가능.
  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeeBeans(32);
  maker2.makeCoffee(2);
  maker2.clean();

  class Amateuruser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
  console.log("maker3", maker3);
  // pro와 ama는 다른 interface를 받아오기 때문에 interface안에서 규약된 함수들만 사용할 수 있게됩니다.
  const amateur = new Amateuruser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee();
  pro.makeCoffee();
}

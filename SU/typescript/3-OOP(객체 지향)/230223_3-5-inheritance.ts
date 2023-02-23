{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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

  // class의 상속을 이용해 카페라떼 머신을 만들어 보겠습니다.
  // 먼저 기존에 constructor에 붙어있던 private을 지워줘야 상속이 가능해집니다.
  // puplic으로 하거나 proteted로 바꾸도록 합니다.

  class CaffeLatteMachine extends CoffeeMachine {
    // 자식 class에서도 생성자를 생성할 때 새로운 데이터를 받고싶다면 constructor를 사용해줍니다.
    // 주의할 점은 super를 꼭 호출해주어야 합니다.
    constructor(beans: number, public serialNumber: string) {
      // 또한 부모 생성자에서 받아올 데이터가 있다면 그대로 super에서도 받아와야합니다.
      super(beans);
    }
    private steamMilk(): void {
      console.log("우유를 스팀중입니다");
    }
    makeCoffee(shots: number): CoffeeCup {
      // 아래와 같이 super를 이용해 부모 class에 있는 함수중 원하는 함수를 사용할 수 있습니다.
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        // 그렇게 할당해준 변수를 아래의 return에 넣어주면 부모 class에서 진행한 과정을
        // 자식 함수에서도 진행할 수 있습니다.
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(32);
  const latteMahcine = new CaffeLatteMachine(32, "S1EEF32");
  const coffee = latteMahcine.makeCoffee(1);
  console.log(latteMahcine.serialNumber);
  console.log(coffee);
}

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 아래의 정보 두개는 class가 정의될 때 딱 한 번만 있으면 되는 정보들입니다.
    // 아래와 같이 선언을 하게 되면 인스턴스를 만들 때마다 아래의 정보들을 가지는
    // 인스턴스가 생성될 것이고 이는 곧 메모리의 낭비로 이어집니다.
    static BEANS_GRAM_PER_SHOT: number = 7;
    // 이를 해결하기 위해 static이라는 키워드를 붙여주게 되면 이제부터 BEANS~~는 class level이 됩니다.
    // static 이라는 키워드를 붙여주게 되면 인스턴스가 생성될 때 마다 생성되지 않습니다.
    coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 또한 static 키워드는 변수뿐만이 아니라 아래와 같이 함수에도 적용이 가능합니다.
    // static 키워드가 붙은 함수는 외부에서 new 키워드를 통해 만들어 접근하지 않아도 접근이 가능한데 (이어지는 글은 주석 44번째로)
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // 또한 static으로 선언된 정보의 경우 더이상 this. 가 아니라 해당 class의 이름으로 접근을 해야 합니다.
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  // new 키워드를 통해 우리의 커피메이커를 만들어주면 static을 붙인 정보는 콘솔창에 출력되지 않습니다.
  const maker = new CoffeeMaker(32);
  const coffee = maker.makeCoffee(2);

  // static 키워드를 붙여 만든 함수는 아래와 같이 바로 접근이 가능해집니다.
  // new키워드를 사용하지 않고도 커피머신을 만들어 낼 수 있습니다.
  // 만약 static을 붙여주지 않는다면 아래와 같이 class level에 접근할 수 없어 new 키워드로 생성해준 뒤
  // 접근을 해주어야 합니다.
  const maker2 = CoffeeMaker.makeMachine(42);

  console.log(maker);
  console.log(coffee);

  // static에 대한 정리를 좀 더하자면 대표적으로 JS 에서 Math 가 있는데 우리가 Math를 사용할 때
  // const math = new Math() 라고 선언하여 사용하지 않고 Math.abs 라고 접근하여 사용합니다
  // 이는 Math안에 들어있는 것들이 class level로 선언되어 있기 때문입니다.
  // 따라서 우리는 선언을 하지 않더라도 class level에 접근하여 사용이 가능해지는 것입니다.
}

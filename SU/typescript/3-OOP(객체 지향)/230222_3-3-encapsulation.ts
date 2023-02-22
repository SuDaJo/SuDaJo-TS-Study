{
  // 이번 파트에서는 3-2에서 만들었던 함수의 정보들을 캡슐화 하여 만들어보도록 하겠습니다.

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 우리가 만든 커피 메이커의 문제점은 무엇일까요? 인스턴스를 생성하고 나서 문제가 생기는데 (62번째 주석으로)
  // 따라서 외부에서 접근할 수 없도록 정보를 은닉해줄 수 있는 방법으로는
  // 1. public 2. private 3. protected 와 같이 세가지 방법이 있는데 기본적으로 따로 작성해주지 않으면
  // 모든 것은 public로 설정되어집니다. 따라서 외부에서 접근할 수 없도록 private을 이용하여
  // 우리의 정보를 은닉하면 더이상 private키워드가 붙은 변수는 외부에서의 접근이 불가능해집니다.
  // protected의 경우 Coffemaker를 상속받은 자식 클래스에서만 접근이 가능해집니다. (외부에서는 여전히 접근 불가)
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;

    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 또한 static을 이용해서 아래와 같이 무언가 오브젝트를 만들 수 있는 함수를 제공한다면
    // 누군가가 생성자를 이용하여 생성하는 것을 금지하기 위해 사용합니다.
    // 따라서 이러한 경우에는 constructor를 private으로 만들어서 항상 static메서드를 사용할 수 있도록
    // 권장하는 것이 좋습니다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // private 키워드를 붙여 우리의 커피콩수를 마음대로 조작할 수 업솓록 만들었으며
    // 커피콩의 갯수를 조절하려면 인스턴스를 생성하여 아래의 메서드를 이용해 접근을 하여줍니다.
    // 이해하기 쉽게 예를들면 커피기계를 사서 커피콩을 채워줘야 하는 것과 같습니다.
    // 외부에서 접근하여 바꾸는 것은 마치 커피 기계를 살때부터 커피콩의 갯수를 마음대로 설정하여
    // 구매하는 것과 똑같습니다.
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩의 수는 0보다 커야합니다.");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
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

  // constructor에 private을 붙여주었으므로 new 키워드를 통해 생성이 불가능해짐.
  // 그렇다면 커피기계를 만들기 위해선? 우리가 만들어둔 makeMachine 메서드를 사용합니다.
  // const maker = new CoffeeMaker(32); /// XXXXX
  const maker = CoffeeMaker.makeMachine(32);

  // 아래와 같이 인스턴스를 생성한 뒤 커피콩의 수를 음수로도 정의를 해버릴 수 있다는 것입니다.
  // 이는 우리가 따로 제한사항을 두지 않았기 때문에 오브젝트 상태를 유효하지 않은 값으로 바꿀 수 있기 때문입니다.
  // maker.coffeeBeans = -34; // 제한사항을 둔 후에는 이와 같이 설정해주는 것이 불가능해집니다.
  // 커피콩의 갯수를 채우고 싶다면? 우리가 만들어둔 메서드를 통해 만들어주도록 합니다.
  maker.fillCoffeeBeans(32);

  // 캡슐화는 외부에서 접근하여 변경가능 한 것이 무엇인지, 내부에서만 사용하는 것이 무엇인지를 잘 생각하여
  // 캡슐화를 하여 사용하면 좀 더 나은 코딩이 가능해집니다.
}

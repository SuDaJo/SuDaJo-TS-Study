{
  // 커피를 뽑아주는 함수를 절차지향적으로 만들어 보도록 하겠습니다.

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 1샷당 들어가는 커피콩의 수
  const BEANS_GRAM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }

    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots: shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);

  console.log(coffee);
}

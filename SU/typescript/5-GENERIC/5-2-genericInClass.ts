{
}
// class에서 generic이 어떻게 사용되는지 알아보도록 하기위해
// either라는 interface를 만들어보겠습니다
// either : a or b

interface Either1 {
  left: () => number;
  right: () => number;
}

interface Either<L, R> {
  left: () => L;
  right: () => R;
}

// 아래의 class를 generic을 활용해 업그레이드 해보도록 하겠습니다
class SimpleEither implements Either1 {
  constructor(private leftValue: number, private rightValue: number) {}
  left(): number {
    return this.leftValue;
  }

  right(): number {
    return this.rightValue;
  }
}

// 왼쪽과 오른쪽을 의미하는 L, R을 사용했습니다.
// 또한 Either라는 interface또한 generic으로 만들어주어야 합니다.
class SimpleEitherUpgrade<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either = new SimpleEither(4, 5);
either.left();
either.right();

// 아래와 같이 숫자를 넣을수도있고
const eitherUpgrade: SimpleEitherUpgrade<number, number> = new SimpleEitherUpgrade(4, 5);
// string을 전달할수도 있습니다.
const best = new SimpleEitherUpgrade(4, "hello");
// 오브젝트 또한 전달이 가능합니다.
const best2 = new SimpleEitherUpgrade({ name: "수현" }, "hello");

// 이처럼 generic을 활용하면 좀 더 활용도가 높은 class를 만들 수 있으며 제네릭함수를 만들때에는
// 임의로 L, R과 같이 만들어주면 됩니다.

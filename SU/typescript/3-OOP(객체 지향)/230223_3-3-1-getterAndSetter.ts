{
  // Getter와 Setter에 대해서 알아봅시다.

  class User {
    // 아래와 같이 선언해주는 것이아닌 lastName과 firstName에 private키워드를 붙이고 싶다면
    // private lastName: string; // 이런식으로 해주어도 되지만
    // constructor에서 바로 private을 붙이면 위의 코드를 생략할 수 있으며 더 깔끔하게 코드를 작성할 수 있습니다
    firstName: string;
    // fullName을 계속해서 변경해주고 싶다면 아래와 같이 멤버변수를 바로 설정해주는 것이 아닌
    // fullName: string; XXXXX
    // 아래와 같이 get이라는 키워드를 사용하여 정의해주면 firstName을 업데이트 할때마다 fullName도 업데이트 되어집니다.
    // 또한 접근방법도 우리는 함수로 작성을 해주었지만 get이라는 키워드가 붙으면 멤버변수에 접근하듯이 접근하여 사용하면 됩니다.
    // 이처럼 Getter와 Setter는 어떠한 계산을 하여서 멤버변수로서 사용할 때 사용하면 유용하게 사용가능합니다.
    get fullName2(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    // internalAge에는 접근할 수 없지만
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    // set을 아래와 같이 코딩해주고 age에 접근하여 값을 바꾸어줄 수 있습니다.
    set age(num: number) {
      if (num < 0) {
        // 나이를 0보다 크게해주세요
      }
      this.internalAge = num;
    }

    fullName: string;

    constructor(firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User("정", "수현");
  console.log(user.fullName);
  // user의 firstName을 아래와 같이 "한" 으로 바꾸어도 콘솔창에는 이전에 선언한 "정 수현" 이 fullName으로 출력됩니다.
  // 그 이유는 fullName에 이미 할당된 정보가 변경이 되지 않기 때문입니다.
  user.firstName = "한";
  // 아래와 같이 입력해주면 setter가 호출되면서 내부적으로 internalAge의 값을 바꾸어줍니다.
  user.age = 32;
  console.log(user.fullName); // 정 수현
  console.log(user.fullName2); // 한 수현
}

interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 매우 안좋은 함수입니다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 받아온 타입 그대로 리턴을 해줍니다.
// <T>만 붙여주게 되면 안에는 pay()라는 함수가 없습니다.
// 그 이유는 함수를 선언하는 시점에는 employee에는 세부적인 정보가 없기때문입니다.
// 따라서 아래와 같이 <T extends Employee> 라고 적어주면 되는데 이는 Employee라는 함수를
// 확장한 것만 받아서 리턴해주겠다 라고 말해주는 것입니다.
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const su = new FullTimeEmployee();
const bob = new PartTimeEmployee();

su.workFullTime();
bob.workPartTime();

const suAfterPay = payBad(su);
const bobAfterPay = payBad(bob);
// 아래와 같이 suAfterPay를 입력해보면 더이상 work함수가 없는 것을 알 수 있습니다.
// suAfterPay
// 그 이유는 suAfterPay에서 리턴된 emplyee interface가 FullTime함수로 전달하면
// fullTime함수에 대한 정보를 잃어버리고 그냥 Employee만 리턴되기 때문에 더이상 일을할 수 없는 상태가 되는 것입니다.
// 즉 위의 두 함수는 그냥 Emplyee가 되어버리기 떄문에 fulltime인지 parttime인지 알 수 없는 상태가 되어버립니다.

// 아래와 같이 새로만든 pay로 함수를 만들어주면 fulltime 함수를 가지는 것을 알 수 있습니다.
// 또한 우리가 Employee라는 것을 확장한 녀석들만 타입으로 받기로 했으니
// 다른 타입이 들어가게 되면 에러가 출력되는 것을 알 수 있습니다
const goodPay = pay(su);
// const goodPay = pay(13); // XXXXX

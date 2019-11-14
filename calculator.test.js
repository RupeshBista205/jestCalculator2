const Calculator = require("./Calculator");

describe("Calculator", () => {
  test("has a gatter on 'register' called 'equal", () => {
    const subject = new Calculator(5);
    expect(subject.equals).toBeDefined();
  });

  test("has a function RPN that will add  ", () => {
    const subject = new Calculator();
    expect(subject.rpn("1 2 +")).toBe(3);
  });

  test("has a function RPN that will subtract  ", () => {
    const subject = new Calculator();
    expect(subject.rpn("3 2 -")).toBe(1);
  });

  test("has a function RPN that will Multiply  ", () => {
    const subject = new Calculator();
    expect(subject.rpn("6 6 *")).toBe(36);
  });

  test("has a function RPN that will Divide  ", () => {
    const subject = new Calculator();
    expect(subject.rpn("4 2 /")).toBe(2);
  });

  test("has a function RPN that will evaluate expression  ", () => {
    const subject = new Calculator();
    expect(subject.rpn("1 2 + 7 - 2 *")).toBe(-8);
    
  });
});

//test('adds 1 + 2 to equal 3', () => {
//expect(sum(1, 2)).toBe(3);
//});

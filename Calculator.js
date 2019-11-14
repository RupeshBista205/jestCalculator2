class Calculator {
  //Maybe change number to results later on for semantic clarity?
  constructor(num1) {
    this.num1 = num1;
  }

  add(num2) {
    this.num1 = num1 + num2;
    return this.num1;
  }

  subtraction(num2) {
    this.num1 = num1 - num2;
    return this.num1;
  }

  equals() {
    return this.num1;
  }

  rpn(str) {
    //var input = prompt("");
    var values = str.split(" ");
    var arr = [];

    for (const i of values) {
      arr.push(i);
      if (i === "+") {
        arr.pop(); // throwing away the operator
        var num2 = arr.pop();
        var num1 = arr.pop();
        var sum = Number.parseInt(num1) + Number.parseInt(num2);
        arr.push(sum);
      }
      if (i === "-") {
        arr.pop();
        var num2 = arr.pop();
        var num1 = arr.pop();
        var diff = Number.parseInt(num1) - Number.parseInt(num2);
        arr.push(diff);
      }

      if (i === "*") {
        arr.pop();
        var num2 = arr.pop();
        var num1 = arr.pop();
        var mult = Number.parseInt(num1) * Number.parseInt(num2);
        arr.push(mult);
      }

      if (i === "/") {
        arr.pop();
        var num2 = arr.pop();
        var num1 = arr.pop();
        var div = Number.parseInt(num1) / Number.parseInt(num2);
        arr.push(div);
      }
    }
    return arr.pop();
  }
}

module.exports = Calculator;

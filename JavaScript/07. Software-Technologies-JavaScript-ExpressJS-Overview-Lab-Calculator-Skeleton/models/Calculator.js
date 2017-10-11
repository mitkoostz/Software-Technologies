function Calculator(leftop, op, rightop) {

    this.leftop = leftop;
    this.rightop = rightop;
    this.op = op;

    this.calculateResult = function () {

        let result = 0;

        switch (op) {
            case "+":
                result = leftop + rightop;
                break;
            case "-":
                result = leftop - rightop;
                break;
            case "*":
                result = leftop * rightop;
                break;
            case "/":
                result = leftop / rightop;
                break;
        }
    }
}

module.exports = Calculator;
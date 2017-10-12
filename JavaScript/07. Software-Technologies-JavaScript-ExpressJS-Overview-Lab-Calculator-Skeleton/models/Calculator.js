function Calculator(leftop, op, rightop) {

    this.leftop = leftop;
    this.rightop = rightop;
    this.op = op;

    this.calculateResult = function () {

        let result = 0;

        switch (this.op) {
            case "+":
                result = this.leftop + this.rightop;
                break;
            case "-":
                result = this.leftop - this.rightop;
                break;
            case "*":
                result = this.leftop * this.rightop;
                break;
            case "/":
                result = this.leftop / this.rightop;
                break;
        }
        return result;
    }
}

module.exports = Calculator;
const Calculator = require('../models/Calculator')
module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let calculatorBody = req.body;
        let calculatorParams = calculatorBody['calculator'];

        let calculator = new  Calculator();
        calculator.leftop = Number(calculatorParams.leftop);
        calculator.rightop = Number(calculatorParams.rightop);
        calculator.op = calculatorParams.op;

        let result = calculator.calculateResult();

        res.render('home/index',{'calculator':calculator,'result':result});

    }
};


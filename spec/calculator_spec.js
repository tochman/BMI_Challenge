
const { Person, BMICalculator } = require('./spec.helper')

describe("BMICalculator Metric", function () {
    let bmi_calculator;
    let person;

    beforeEach(function() {
        person = new Person({weight: 90, height: 186});
        calculator = new BMICalculator();
    });

    it("calculates BMI for a person using metric method", function () {
        calculator.metric_bmi(person);
        expect(person.bmiValue).to.equal(26.01);
    });
    it("sets BMI message for a person using metric method", () => {
        calculator.metric_bmi(person);
        expect(person.bmiMessage).to.equal('Overweight');
    });
   
});

describe("BMICalculator Imperial", function () {
    let bmi_calculator;
    let person;

    beforeEach(function () {
        person = new Person({weight: 165, height: 64});
        calculator = new BMICalculator();
    });

    it("calculates BMI for a person using imperial method", function () {
        calculator.imperial_bmi(person);
        expect(person.bmiValue).to.equal(28.32);
    });
    
    it("sets BMI message for a person using metric method", () => {
        calculator.imperial_bmi(person);
        expect(person.bmiMessage).to.equal('Overweight');
    });
});
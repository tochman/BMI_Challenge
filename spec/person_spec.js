const { Person } = require('./spec.helper')

describe("Person Metric", () => {
    let person = new Person ({
        weight: 90,
        height: 186
    });
    
    it("should have weight of 90", () => {
        expect(person.weight).to.equal(90);
    });
    it("should have height of 186", () => {
        expect(person.height).to.equal(186);
    });
    it("should calculate BMI value", () => {
        person.calculate_bmi("metric");
        expect(person.bmiValue).to.equal(26.01);
    });
    it("should have a BMI message", () => {
        person.calculate_bmi("metric");
        expect(person.bmiMessage).to.equal('Overweight');
    });

});

describe("Person Imperial", () => {
    let person = new Person ({
        weight: 165,
        height: 64
    });

    it("should have weight of 165", () => {
        expect(person.weight).to.equal(165);
    });

    it("should have height of 64", () => {
        expect(person.height).to.equal(64);
    });

    it ("should calculate BMI value", () => {
        person.calculate_bmi("imperial");
        expect(person.bmiValue).to.equal(28.32);
    });
    it ("should have a BMI message", () => {
        person.calculate_bmi("imperial");
        expect(person.bmiMessage).to.equal('Overweight');
    });
});
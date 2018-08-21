const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can calculate BMI', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });
    
    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });

    it('by inputing his weight and height', async () => {

        await browser.fillIn("input[id='weight-in-kgs']", { with: "90"})
        await browser.fillIn("input[id='height-in-cm']", { with: "186"})

        await browser.clickOnButton("button")
        let content = await browser.getContent("span[id='display_value']")
        expect(content).to.eql('Your Bmi is 26.01');
    });
    
    it('by inputing his weight and height', async () =>{
        await browser.fillIn("input[id='weight-in-pounds']", { with: "165"})
        await browser.fillIn("input[id='height-in-inches']", {with: "64"})

        await browser.clickOnButton("button")
        let content = await browser.getContent("span[id='display_value']")
        expect(content).to.eql('Your Bmi is 28.32');
    });
});
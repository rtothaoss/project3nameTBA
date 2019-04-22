const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.supremenewyork.com/shop/all/tops_sweaters'
const CHECKOUT = 'https://www.supremenewyork.com/checkout'

const itemList = "Overdyed Tee";
const name = 'Ross Carmack';
const email = "test@gmail.com";
const telephone = "2142142144";
const address = '123 test lane';
const zipcode = '75075';
const city = 'plano';
const cc = '1234567891234567';
const ccMonth = '01';
const ccYear = '2022';
const CVV = '123';


const supreme = {
    browser: null,
    page: null,

    initialize: async () => {
        supreme.browser = await puppeteer.launch({ headless: false });

        supreme.page = await supreme.browser.newPage();

    },

    selection: async () => {

        await supreme.page.goto(BASE_URL);

        let itemSelection = await supreme.page.$x(`//a[contains(text(), "${itemList}")]`)

        await itemSelection[0].click();

        await supreme.page.waitFor(1500)
       
        await supreme.page.click('input[name = "commit"]')
        
        await supreme.page.waitFor(1500)

    },

    checkout: async () => {

        await supreme.page.goto(CHECKOUT);

        await supreme.page.type('input[id="order_billing_name"]', name)

        await supreme.page.type('input[id="order_email"]', email)

        await supreme.page.type('input[id="order_tel"]', telephone)

        await supreme.page.type('input[id="bo"]', address)

        await supreme.page.type('input[id="order_billing_zip"]', zipcode)

        await supreme.page.type('input[id="order_billing_city"]', city)

        await supreme.page.type('input[id="nnaerb"]', cc)

        await supreme.page.select('select#credit_card_month', ccMonth)

        await supreme.page.select('select#credit_card_year', ccYear)

        await supreme.page.type('input[id="orcer"]', CVV)

        await supreme.page.click("#order_terms")

        console.log('done')

    }


}


module.exports = supreme;
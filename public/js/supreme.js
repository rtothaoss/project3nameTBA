const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.supremenewyork.com/shop/all/tops_sweaters'
const CHECKOUT = 'https://www.supremenewyork.com/checkout'

const itemList = "Overdyed Tee";
const itemlist1 = 'Highest Standards Athletic'


const firstCard = {
    name : 'Ross Carmack',
    email : "test@gmail.com",
    telephone : "2142142144",
    address : '123 test lane',
    zipcode : '75075',
    city : 'plano',
    cc : '1234567891234567',
    ccMonth : '01',
    ccYear : '2022',
    CVV : '123'
}

const secondCard = {
    name : 'Ross Carmack',
    email : "TEST@gmail.com",
    telephone : "9999999999",
    address : '999 test lane',
    zipcode : '75075',
    city : 'plano',
    cc : '1234567891234567',
    ccMonth : '01',
    ccYear : '2022',
    CVV : '123'
}



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

        await supreme.page.type('input[id="order_billing_name"]', firstCard.name)

        await supreme.page.type('input[id="order_email"]', firstCard.email)

        await supreme.page.type('input[id="order_tel"]', firstCard.telephone)

        await supreme.page.type('input[id="bo"]', firstCard.address)

        await supreme.page.type('input[id="order_billing_zip"]', firstCard.zipcode)

        await supreme.page.type('input[id="order_billing_city"]', firstCard.city)

        await supreme.page.type('input[id="nnaerb"]', firstCard.cc)

        await supreme.page.select('select#credit_card_month', firstCard.ccMonth)

        await supreme.page.select('select#credit_card_year', firstCard.ccYear)

        await supreme.page.type('input[id="orcer"]', firstCard.CVV)

        await supreme.page.click("#order_terms")

        console.log('done')

    },
    initialize1: async () => {
        supreme.browser = await puppeteer.launch({ headless: false });

        supreme.page = await supreme.browser.newPage();

    },

    selection1: async () => {

        await supreme.page.goto(BASE_URL);

        let itemSelection = await supreme.page.$x(`//a[contains(text(), "${itemlist1}")]`)

        await itemSelection[0].click();

        await supreme.page.waitFor(1500)

        await supreme.page.click('input[name = "commit"]')

        await supreme.page.waitFor(1500)

    },

    checkout1: async () => {

        await supreme.page.goto(CHECKOUT);

        await supreme.page.type('input[id="order_billing_name"]',secondCard.name)

        await supreme.page.type('input[id="order_email"]', secondCard.email)

        await supreme.page.type('input[id="order_tel"]', secondCard.telephone)

        await supreme.page.type('input[id="bo"]', secondCard.address)

        await supreme.page.type('input[id="order_billing_zip"]', secondCard.zipcode)

        await supreme.page.type('input[id="order_billing_city"]', secondCard.city)

        await supreme.page.type('input[id="nnaerb"]', secondCard.cc)

        await supreme.page.select('select#credit_card_month', secondCard.ccMonth)

        await supreme.page.select('select#credit_card_year', secondCard.ccYear)

        await supreme.page.type('input[id="orcer"]', secondCard.CVV)

        await supreme.page.click("#order_terms")

        console.log('done')

    }


}


module.exports = supreme;
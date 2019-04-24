const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.supremenewyork.com/shop/all/tops_sweaters'
const CHECKOUT = 'https://www.supremenewyork.com/checkout'
const BASE_URL1 = 'https://www.supremenewyork.com/shop/all/accessories'

const itemList = "Standards";
const itemColor = 'Orange'
const itemList1 = 'Libertad'
// const itemColor1 = 'Green'

const firstCard = {
    name        : 'Ross Carmack',
    email       : "test@gmail.com",
    telephone   : "2142142144",
    address     : '123 test lane',
    zipcode     : '75075',
    city        : 'plano',
    cc          : '1234567891234567',
    ccMonth     : '01',
    ccYear      : '2022',
    CVV         : '123'
}

const secondCard = {
    name        : 'Ross Carmack',
    email       : "TEST@gmail.com",
    telephone   : "9999999999",
    address     : '999 test lane',
    zipcode     : '75075',
    city        : 'plano',
    cc          : '1234567891234567',
    ccMonth     : '01',
    ccYear      : '2022',
    CVV         : '123'
}



const supremeCard1 = async () => {
   
        const browser = await puppeteer.launch({ headless: false });

        const page = await browser.newPage();

        await page.goto(BASE_URL);

        let itemSelection = await page.$x(`//a[contains(text(), "${itemList}")]`)

        await itemSelection[0].click();

        await page.waitFor(700)
        
        await page.click(`a[data-style-name = "${itemColor}"]`)

        await page.click('input[name = "commit"]')

        await page.waitFor(500)

        await page.goto(CHECKOUT);

        await page.type('input[id="order_billing_name"]', firstCard.name)

        await page.type('input[id="order_email"]', firstCard.email)

        await page.type('input[id="order_tel"]', firstCard.telephone)

        await page.type('input[id="bo"]', firstCard.address)

        await page.type('input[id="order_billing_zip"]', firstCard.zipcode)

        await page.type('input[id="order_billing_city"]', firstCard.city)

        await page.type('input[id="nnaerb"]', firstCard.cc)

        await page.select('select#credit_card_month', firstCard.ccMonth)

        await page.select('select#credit_card_year', firstCard.ccYear)

        await page.type('input[id="orcer"]', firstCard.CVV)

        await page.click("#order_terms")

        console.log('done')

    

    }

    const supremeCard2 = async () => {
   
        const browser = await puppeteer.launch({ headless: false });

        const page = await browser.newPage();

        await page.goto(BASE_URL1);

        let itemSelection = await page.$x(`//a[contains(text(), "${itemList1}")]`)

        await itemSelection[0].click();

        await page.waitFor(600)

        // await page.click(`a[data-style-name = "${itemColor1}"]`)

        await page.click('input[name = "commit"]')

        await page.waitFor(500)

        await page.goto(CHECKOUT);

        await page.type('input[id="order_billing_name"]', secondCard.name)

        await page.type('input[id="order_email"]', secondCard.email)

        await page.type('input[id="order_tel"]', secondCard.telephone)

        await page.type('input[id="bo"]', secondCard.address)

        await page.type('input[id="order_billing_zip"]', secondCard.zipcode)

        await page.type('input[id="order_billing_city"]', secondCard.city)

        await page.type('input[id="nnaerb"]', secondCard.cc)

        await page.select('select#credit_card_month', secondCard.ccMonth)

        await page.select('select#credit_card_year', secondCard.ccYear)

        await page.type('input[id="orcer"]', secondCard.CVV)

        await page.click("#order_terms")

        console.log('done')

        

    }

   


// supremeCard1()
// supremeCard2()



module.exports.supremeCard1 = supremeCard1;
module.exports.supremeCard2 = supremeCard2;
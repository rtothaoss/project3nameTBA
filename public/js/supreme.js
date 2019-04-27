const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.supremenewyork.com/shop/all/accessories'
const CHECKOUT = 'https://www.supremenewyork.com/checkout'
const BASE_URL1 = 'https://www.supremenewyork.com/shop/all/accessories'

const itemList = "Supreme®/ENO® DoubleNest® Hammock";
// const itemColor = 'White'
const itemList1 = 'Supreme®/Hanes® Tagless Tees (3 Pack)'
// const itemColor1 = 'Green'
const itemSize1 = 'Large'

const firstCard = {
  name: 'Ross Carmack',
  email: "test@gmail.com",
  telephone: "2142846049",
  address: '111 Test Drive',
  zipcode: '75075',
  city: 'Plano',
  cc: '1111111111111111',
  ccMonth: '11',
  ccYear: '2021',
  CVV: '111'
}

const secondCard = {
  name: 'Ross Carmack',
  email: "test@gmail.com",
  telephone: "2142846049",
  address: '111 Test Drive',
  zipcode: '75075',
  city: 'plano',
  cc: '1111111111111111',
  ccMonth: '11',
  ccYear: '2021',
  CVV: '111'
}



const supremeCard1 = async () => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  let itemSelection = await page.$x(`//a[contains(text(), "${itemList}")]`)

  await itemSelection[0].click();

  await page.waitFor(700)

  // await page.click(`a[data-style-name = "${itemColor}"]`)

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

  await page.click('input[name = "commit"]')



}

const supremeCard2 = async () => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(BASE_URL1);

  let itemSelection = await page.$x(`//a[contains(text(), "${itemList1}")]`)

  await itemSelection[0].click();

  await page.waitFor(700)

  // await page.click(`a[data-style-name = "${itemColor1}"]`)

  let $elemHandler = await page.$('#s');
  let properties = await $elemHandler.getProperties();
  for (const property of properties.values()) {
    const element = property.asElement();
    if (element) {
      let hText = await element.getProperty("text");
      let text = await hText.jsonValue();
      if (text === `${itemSize1}`) {
        let hValue = await element.getProperty("value");
        let value = await hValue.jsonValue();
        await page.select("select#s", value); // or use 58730
        console.log(`Selected ${text} which is value ${value}.`);
      }
    }
  }

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

  await page.click('input[name = "commit"]')


}

// const supremeTestWithMouse = async () => {

//   const browser = await puppeteer.launch({ headless: false });

//   const page = await browser.newPage();

//   await page.goto(BASE_URL1);

//   let itemSelection = await page.$x(`//a[contains(text(), "${itemList1}")]`)

//   await page.mouse.move(100, 100);
//   await page.mouse.down();
//   await page.mouse.move(200, 200);
//   await page.mouse.up();

//   await itemSelection[0].click();

//   await page.waitFor(700)

//   await page.mouse.move(100, 100);
//   await page.mouse.down();
//   await page.mouse.move(200, 200);
//   await page.mouse.up();

//   // await page.click(`a[data-style-name = "${itemColor1}"]`)

//   await page.mouse.move(100, 100);
//   await page.mouse.down();
//   await page.mouse.move(200, 200);
//   await page.mouse.up();

//   let $elemHandler = await page.$('#s');
//   let properties = await $elemHandler.getProperties();
//   for (const property of properties.values()) {
//     const element = property.asElement();
//     if (element){
//       let hText = await element.getProperty("text");
//       let text = await hText.jsonValue();
//       if(text===`${itemSize1}`){
//          let hValue = await element.getProperty("value");
//          let value = await hValue.jsonValue();
//         await page.select("select#s",value); // or use 58730
//         console.log(`Selected ${text} which is value ${value}.`);
//       }
//     }
//   }

//   await page.mouse.move(100, 100);
//   await page.mouse.down();
//   await page.mouse.move(200, 200);
//   await page.mouse.up();

//   await page.click('input[name = "commit"]')

//   await page.waitFor(700)

//   await page.goto(CHECKOUT);

//   await page.type('input[id="order_billing_name"]', secondCard.name, {delay: 100})

//   await page.type('input[id="order_email"]', secondCard.email, {delay: 100})

//   await page.type('input[id="order_tel"]', secondCard.telephone, {delay: 100})

//   await page.type('input[id="bo"]', secondCard.address, {delay: 100})

//   await page.type('input[id="order_billing_zip"]', secondCard.zipcode, {delay: 100})

//   await page.type('input[id="order_billing_city"]', secondCard.city, {delay: 100})

//   await page.type('input[id="nnaerb"]', secondCard.cc, {delay: 100})

//   await page.select('select#credit_card_month', secondCard.ccMonth)

//   await page.select('select#credit_card_year', secondCard.ccYear)

//   await page.type('input[id="orcer"]', secondCard.CVV)

//   await page.waitFor(1500)

//   await page.click("#order_terms")

//   await page.mouse.move(100, 100);
//   await page.mouse.down();
//   await page.mouse.move(200, 200);
//   await page.mouse.up();

//   await page.click('input[name = "commit"]')


// }




// supremeCard1()
supremeCard2()
// supremeTestWithMouse();




module.exports.supremeCard1 = supremeCard1;
module.exports.supremeCard2 = supremeCard2;
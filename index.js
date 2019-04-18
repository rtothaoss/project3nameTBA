const sup = require('./supreme');

(async () => {

await sup.initialize();

await sup.selection();

await sup.checkout();

await browser.close();


})()


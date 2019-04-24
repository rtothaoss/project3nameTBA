var db = require('../models');
var axios = require("axios");
var cheerio = require("cheerio");
const sup = require('../public/js/index.js')



module.exports = function (app) {
    var droplistLink = ''
  
  app.get("/scrape", function (req, res) {
    
    axios.get("https://www.supremecommunity.com/season/spring-summer2019/droplists/").then(function (response) {
    
      var $ = cheerio.load(response.data);


      $("div#box-latest").each(function (i, element) {
       
        var result = {};


        result.droplistLink = $(this)

          .find('a')
          .attr("href");

        droplistLink = `https://www.supremecommunity.com${result.droplistLink}`  
                  

      });

      droplistPage();
      res.send("scrape Complete");
      
    });
  });

function droplistPage() {  
    axios.get(droplistLink).then(function (response) {
    
      var $ = cheerio.load(response.data);


      $("div.masonry__item").each(function (i, element) {
       
        var result = {};

       
        result.title = $(this)
          .find('.card-details')
          .attr('data-itemname')

        result.summary = $(this) 
            .find('img')
            .attr('alt')
        // result.link = $(this)

        result.img = $(this)
            .find('img')
            .attr('src')
        
        result.price = $(this)
        .find('.label-price')
        .text()

        result.style = $(this)
        .attr('data-masonry-filter');



        db.Droplist.create(result)
        
        
        .then(function (dbDroplist) {

          console.log(dbDroplist);
        })
        .catch(function (err) {

          console.log(err);
        });
    });
        
      });
}

  app.get("/droplist", function (req, res) {
    db.Droplist.find({}).then(function (dbDroplist) {
      res.json(dbDroplist)
    })
      .catch(function (err) {
        res.json(err)
      })
  });

  // app.get('/bot', function(req,res) {
  //   sup().then(function(supRes) {
  //     res.send(supRes)
  //   })
  // })

}
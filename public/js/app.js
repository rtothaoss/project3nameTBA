$(function () {
  
 
    $.getJSON("/droplist", function (data) {
        console.log(data)
      
      data.slice().reverse().forEach(function(x) {
        var img = `https://www.supremecommunity.com${x.img}`

        var littleCards = `<div class='newCards' data-id=` + x._id + ` style='margin: 10px 10px;'>
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="`+ img + `" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">` + x.title + `</h5>
          <div class='text-center'>
          <p class="card-text">`+ x.price + `</p>
          </div>
        </div>
        <button style='border-style: none;background-color: white; margin-bottom: 10px; color: dodgerblue' data-id=` + x._id + ` id='cardNotes' class="btn btn-primary">Notes</button>
        </div>
      </div>
      </div>
      </div>`
    
          $('#articles').append(littleCards)
      })
  
    });
  
  
  
  })
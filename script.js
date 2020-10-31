$(document).ready(function () {
  function getToken() {
    var clientID = 'SCASoSRmQBlbQ4oA4CbXkjEmaT3BWXCeyonQWu0gyidZiIXDUq';
    var clientSecret = "Wdt1X5e1jfGmnHhlW6rjWc4KdUB8vbIVB3qfKTFH";
    $.ajax({

      url: 'https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/oauth2/token?',
      type: "POST",
      data: {
        "grant_type": "client_credentials",
        "client_id": clientID,
        "client_secret": clientSecret
      }
    }).then(function (response) {
      // {
      //   "token_type": "Bearer",
      //   "expires_in": 3600,
      //   "access_token": "..."
      // }
      sessionStorage.setItem('token', JSON.stringify(response));
      getPets();

    })
  }
  getToken();

  function getPets() {
    var token = JSON.parse(sessionStorage.getItem('token'));
    $.ajax({
      url: 'https://api.petfinder.com/v2/animals',
      type: 'GET',
      headers: {
        "Authorization": 'Bearer ' + token.access_token
      }
    }).then(function (response) {
      // do something with results

      for (let i = 0; i < response.animals.length; i++) {
        console.log(response.animals[i]);
        console.log(i);

        $("#submit").on("click", function (e) {
          e.preventDefault();
          var species = response.animals[i].species[0];
          var cat = $(".species-1")
          var dog = $(".species-0")
          console.log(species[0])
          if (species === cat) {
            $(`species${0}`).appendTo($(".species"))
            
          };



            $(".clear").empty()
          
        });
      };

    });
  };






})

// var submitEl = document.querySelector("#sendBtn");
// var nameInput = document.querySelector("#petName");
// var messageInput = document.querySelector("#message");
// var submissionResponseEl = document.querySelector("#response");


// submitEl.addEventListener("click", function(event) {
//   event.preventDefault();

//   console.log(event);
  
//   var response = "Thank you for your submission, " + nameInput.value + " We are excited to share your story!";
//   submissionResponseEl.textContent = response;
// })


















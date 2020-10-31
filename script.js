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
      var speciesSelection;
      var sizeSelection;
      var genderSelection;
      $("#submit").on("click", function (e) {
        e.preventDefault();

        //console.log(response.animals[0].species[0])

        speciesSelection = $("#petType").val()
        sizeSelection = $("#petSize").val()
        genderSelection = $("#petGender").val()
        //console.log(speciesSelection)
        //console.log(sizeSelection)
        // console.log(genderSelection)
        for (var i = 0; i < response.animals.length; i++) {
          console.log(response.animals[i]);

          var gender = response.animals[i].gender;
          var species = response.animals[i].species;
          var weight = response.animals[i].size;
          var age = response.animals[i].age;
          var breed = response.animals[i].breeds.primary;
          var name = response.animals[i].name;
          var contact = response.animals[i].contact.email

          console.log(response.animals[i].photos[0])

          if (species === speciesSelection && sizeSelection && genderSelection) {
            var container = $("<div>").addClass("card").html(`<div class="name" class="clear"></div>
              
            <div class="name" class="clear">${name}</div>
            <div class="age" class="clear">${age}</div>
            <div class="breed" class="clear">${breed}</div>
            <div class="gender" class="clear">${gender}</div>
            <div class="size" class="clear">${weight}</div>
            <div class="species" class="clear">${species}</div>
            <div class="contact" class="clear">${contact}</div>`)

            
            $("#petDisplay").append(container);

          };
        };











      });



    });
  };

 

})



















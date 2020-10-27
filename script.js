$(document).ready(function() {
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
    }).then(function(response) {
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
      }).then(function(response) {
        // do something with results
        return response;
      })
    }
  });






// $(document).ready(function() {
//     $("#searchBtn").on("click", function(){
//         var searchValue = $("#search-value").val();
//         $("#search-value").val("");
        
//     });
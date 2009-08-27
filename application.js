$(document).ready(function() {
    data = {
      user: {
        login: "tomek",
        first_name: "Thomas",
        last_name: "Mazur",
        account: {
          status: "active",
          expires_at: "2009-12-31"
        }
      }
    }  

    function readTemplate(name) {
      return $('script[name=' + name + ']').html();
    }


    var url = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=Paris%20Hilton&callback=?";
    $.getJSON(url, function(response) {
        var results = response.responseData.results;

        var $body = $('body');
        for (var i in results) {
          var result = results[i];
          
          var template = readTemplate('imageResult');
          $body.append( $.nano(template, result)); 
        }
      });

})

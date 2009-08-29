$(document).ready(function() {
    function readTemplate(name) {
      return $('script[name=' + name + ']').html();
    }

    $.googleSearch("sharks", {
        type: "images",
        callback: function(response) {
          var results = response.responseData.results;

          var $body = $('body');
          for (var i in results) {
            var result = results[i];

            var template = readTemplate('imageResult');
            $body.append( $.nano(template, result)); 
          }
        }
      });
})

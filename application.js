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

    $('body').append(
      $.nano(readTemplate('test'), data) 
    );
})

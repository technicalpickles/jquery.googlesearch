/* jQuery Google Search */

(function($) {
    /**
     * 
     */
    $.googleSearch = function(query, options) {
      var settings = $.extend({
          version: "1.0",
          type: "web",
          query: query
        }, options);

      var urlParams = {
        v: settings.version,
        q: settings.query
      }

      var url = "http://ajax.googleapis.com/ajax/services/search/" + settings.type + "?callback=?&";
      $.getJSON(url, urlParams, settings.callback);

    };
  })(jQuery);

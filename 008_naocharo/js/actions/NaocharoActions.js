var jsonp = require('jsonp');
var AppDispatcher = require('../dispatchers/AppDispatcher');

var ApiUrl = 'https://api.instagram.com/v1/tags/'+ 'naocharo' +'/media/recent?suppress_response_codes=true&client_id=5c47a8ca11ba4a61bacfb3a0a2d07fc8';

var NaocharoActions = {
  fetch: function() {
    jsonp(ApiUrl, function(err, res) {
      AppDispatcher.dispatch({
        actionType: 'fetch',
        data: res.data
      });
    })
  }
};
module.exports = NaocharoActions;
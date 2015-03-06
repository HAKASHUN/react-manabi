var React = require('react');
var MainSection = require('./MainSection.react');

var NaocharoApp = React.createClass({

  render: function() {
    return (
      <div>
        <header></header>
        <MainSection></MainSection>
        <footer></footer>
      </div>
    );
  }

});

module.exports = NaocharoApp;

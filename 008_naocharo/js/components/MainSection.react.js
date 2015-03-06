var React = require('react');
var PhotoStore = require('../stores/PhotoStore');
var NaocharoActions = require('../actions/NaocharoActions');

function getPhotos() {
  return {
    photos: PhotoStore.getAll()
  }
}

var MainSection = React.createClass({
  getInitialState: function() {
    return getPhotos();
  },
  componentDidMount: function() {
    NaocharoActions.fetch();
  },
  render: function() {
    return (
      <div>
        メインセクション
        {this.state.photos}
      </div>
    );
  }

});

module.exports = MainSection
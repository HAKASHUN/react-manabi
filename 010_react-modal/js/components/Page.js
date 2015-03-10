var React = require('react');
var Modal = require('react-modal');

var appElement = document.getElementById('app');
Modal.setAppElement(appElement);
Modal.injectCSS();

var Page = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  render: function() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
        >
          <button onClick={this.closeModal}>close</button>
          <h2>Hello</h2>
        </Modal>
        <h1>Page Title</h1>
      </div>
    );
  }
});

module.exports = Page;

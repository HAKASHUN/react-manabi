var React = require('react');
var TodoStore = require('../stores/todo-store');
var MainSection = require('./mainsection');
var Header = require('./header');
var Footer = require('./footer');

function getTodoState() {
    return {
        allTodos: TodoStore.getAll()
    }
}

var APP = React.createClass({
   getInitialState: function() {
       return getTodoState();
   },
   componentDidMount: function() {
       TodoStore.addChangeListener(this._onChange);
   },
   componentWillUnmount: function() {
       TodoStore.removeChangeListener(this._onChange);
   },
   _onChange: function() {
       this.setState(getTodoState());
   },
   render: function() {
       return (
           <div>
               <Header />
               <MainSection allTodos={this.state.allTodos} />
               <Footer allTodos={this.state.allTodos} />
           </div>
       )
   }
});

module.exports = APP;
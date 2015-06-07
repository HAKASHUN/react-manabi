'use strict';

var React = require('react');
var Router = require('react-router');
// use es6 syntax
var { Route, DefaultRoute, NotFoundRoute, RouteHandler, Link } = Router;

// page data
var data = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: 'about'
    }
];

// -> components/App.jsx
var App = React.createClass({
   render: function() {
       return (
       <div>
           <h1>A sample of React Router</h1>
           <Menu pages={data}/>
           <div className="content">
               <RouteHandler />
           </div>
       </div>
       )
   }
});

// -> components/Menu.jsx
var Menu =  React.createClass({
    renderPage: function(page) {
      return (
          <li key={page.path}>
            <Link to={page.path}>{page.name}</Link>
          </li>
      )
    },
    render: function() {
        return (
            <ul>
                {this.props.pages.map(this.renderPage)}
            </ul>
        )
    }
});

// -> components/Index.jsx
var Index = React.createClass({
   render: function() {
     return (
         <p>Hello World!</p>
     )
   }
});

// -> components/About.jsx
var About = React.createClass({
   render: function() {
     return (
         <p>This is About Page!</p>
     )
   }
});

// declare our routes and their hierarchy
var routes = (
    <Route path="/" handler={App}>
        <Route name="about" handler={About}/>
        <DefaultRoute handler={Index} />
        <NotFoundRoute handler={Index} />
    </Route>
);

Router.run(routes, function(Handler) {
   React.render(<Handler/>, document.getElementById('app'));
});
## 001_jsx-compiler

### Hello React!

`/** @jsx React.DOM */`

```javascript
var Transformer = React.createClass({});
```

```javascript
render: function() {
        return (
            <div>Hello React!</div>
        );
    }
```

### Input Event

```html
<div className="row jsx">
```

```html
<textarea onChange={this.update} />
```

```javascript
update: function(e) {
    console.log(e);
},
```
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

### Output State

```html
<pre>{this.state.output}</pre>
```

```javascript
var jsXcode = e.target.value;
```

```javascript
this.setState({
    output: jsXcode
});
```

### Input DefaultValue

```html
<textarea defaultValue={this.state.input} onChange={this.update} />
```

```javascript
getInitialState: function() {
    return {
        output: '',
        input: '/** @jsx React.DOM */\n'
    };
}
```

### Transform Jsx

```javascript
this.setState({
    output: JSXTransformer.transform(jsXcode).code
});
```

## 001_jsx-compiler

### DEMO

[DEMO SITE](http://hakashun.github.io/react-manabi/001_jsx-compiler/)

### Initialize

```html
<!-- react library -->
<script src="http://fb.me/react-0.12.2.js"></script>
<!-- jsx tranform library -->
<script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
```

### Hello React!

`/** @jsx React.DOM */`

```javascript
// Define <Transformer></Tramsformer> Tag.
var Transformer = React.createClass({});
```

```javascript
render: function() {
        return (
            <div>Hello React!</div>
        );
    }
```

```html
<script type="text/jsx">
    /** @jsx React.DOM */
    React.render(
            <Transformer></Transformer>,
            document.getElementById('app')
    )
</script>
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

### Output Transform Error

```html
<div className="error">
    <p>{this.state.err}</p>
</div>
```

```javascript
try {
    this.setState({
        output: JSXTransformer.transform(jsXcode).code,
        err: ''
    });
} catch(e) {
    this.setState({
        err: e.message
    });
}
```

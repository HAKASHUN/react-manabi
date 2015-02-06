/** @jsx React.DOM */
var Transformer = React.createClass({
    getInitialState: function() {
        return {
          output: '',
          input: '/** @jsx React.DOM */\n'
        };
    },
    update: function(e) {
        console.log(e);
        var jsXcode = e.target.value;
        try {
            this.setState({
                output: JSXTransformer.transform(jsXcode).code
            });
        } catch(e) {
            console.log(e);
        }
    },
    render: function() {
        return (
            <div>
                <div className="row jsx">
                    <textarea defaultValue={this.state.input} onChange={this.update} />
                </div>
                <div className="row js">
                    <pre>{this.state.output}</pre>
                </div>
            </div>
        )
    }
})
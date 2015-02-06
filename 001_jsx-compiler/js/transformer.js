/** @jsx React.DOM */
var Transformer = React.createClass({
    getInitialState: function() {
        return {
          output: '',
          input: '/** @jsx React.DOM */\n',
          err: ''
        };
    },
    update: function(e) {
        console.log(e);
        var jsXcode = e.target.value;
        try {
            this.setState({
                output: JSXTransformer.transform(jsXcode).code,
                err: ''
            });
        } catch(e) {
            this.setState({
                err: e.message
            })
        }
    },
    render: function() {
        return (
            <div>
                <div className="error">
                    <p>{this.state.err}</p>
                </div>
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
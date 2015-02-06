/** @jsx React.DOM */
var Transformer = React.createClass({
    getInitialState: function() {
        return {
          output: '',
          input: '/** @jsx React.DOM */\n',
          err: '',
          errClass: 'error hide'
        };
    },
    update: function(e) {
        console.log(e);
        var jsXcode = e.target.value;
        try {
            this.setState({
                output: JSXTransformer.transform(jsXcode).code,
                err: '',
                errClass: 'error hide'
            });
        } catch(e) {
            this.setState({
                err: e.message,
                errClass: 'error show'
            })
        }
    },
    render: function() {
        return (
            <div className="content">
                <div className={this.state.errClass}>
                    <div className="growl-title">Error!</div>
                    <div className="growl-message">{this.state.err}</div>
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
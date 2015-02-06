/** @jsx React.DOM */
var Transformer = React.createClass({
    getInitialState: function() {
        return {
          output: ''
        };
    },
    update: function(e) {
        console.log(e);
        var jsXcode = e.target.value;
        this.setState({
            output: jsXcode
        });
    },
    render: function() {
        return (
            <div>
                <div className="row jsx">
                    <textarea onChange={this.update} />
                </div>
                <div className="row js">
                    <pre>{this.state.output}</pre>
                </div>
            </div>
        )
    }
})
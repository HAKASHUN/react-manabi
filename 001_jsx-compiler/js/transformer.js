/** @jsx React.DOM */
var Transformer = React.createClass({
    update: function(e) {
        console.log(e);
    },
    render: function() {
        return (
            <div>
                <div className="row jsx">
                    <textarea onChange={this.update} />
                </div>
                <div className="row js"></div>
            </div>
        );
    }
})
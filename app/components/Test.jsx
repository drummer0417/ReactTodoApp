var React = require('react');

var Test = React.createClass({


  render: function() {
    var { ccase } = this.props;

    return(
      <h4>Isn't this an amazing test. Tot ziens {ccase}</h4>
    )
  }
});

module.exports = Test;

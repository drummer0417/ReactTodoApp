var React = require( 'react' );

var Todo = React.createClass({

  // onToggleCompleted: function(id) {
  //     return (() => {
  //       this.props.onToggleCompleted(id)
  //     }
  //   )
  // },
  render: function () {
    var {text, id, completed} = this.props;
    return (
      // <div onClick={this.onToggleCompleted(id)}>
      <div onClick={() => {
          this.props.onToggleCompleted(id);
        }}>
        <input type='checkbox' checked={completed} />
        {text}
      </div>
    );
  }
});

module.exports = Todo;

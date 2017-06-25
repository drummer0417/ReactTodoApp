var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  // onToggleCompleted: function(id) {
  //     return (() => {
  //       this.props.onToggleCompleted(id)
  //     }
  //   )
  // },
  render: function () {
    var {text, id, createdAt,completedAt, completed} = this.props;
    var renderDate = () => {
      var message = 'Created: ';
      var timestamp = createdAt;
      if (completed) {
        message = 'Completed: '
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('dd D-MM-YYYY - H:mm:ss');
    };
    return (
      // <div onClick={this.onToggleCompleted(id)}>
      <div onClick={() => {
          this.props.onToggleCompleted(id);
        }}>
        <p>
          <input type='checkbox' checked={completed} />
          {text}
        </p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;

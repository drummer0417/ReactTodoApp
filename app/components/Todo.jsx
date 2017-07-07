var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({

  // onToggleCompleted: function(id) {
  //     return (() => {
  //       this.props.onToggleCompleted(id)
  //     }
  //   )
  // },
  render: function () {
    var {text, id, createdAt, completedAt, completed, dispatch} = this.props;
    var todoClassName = completed? 'todo todo-completed': 'todo';

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
      <div className={todoClassName} onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed))
        }}>
        <div>
          <input type='checkbox' checked={completed} />
        </div>
        <div>
          <p className='todo__text'>{text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect() (Todo);

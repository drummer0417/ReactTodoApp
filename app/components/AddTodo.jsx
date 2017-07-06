var React = require ('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var AddTodo = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.todoText.value;
    if (text.length > 0) {
      this.refs.todoText.value= ''
      dispatch(actions.startAddTodo(text));
    }
  },
  render: function (){
    return(
      <div className='container__footer'>
        <form name='form' onSubmit={this.handleSubmit}>
          <input type='text' ref='todoText' placeholder='Wah gaduh gij doen?' autoFocus/>
          <button className='button expanded '>Add Todo</button>
        </form>
      </div>
    )
  }
});

export default connect() (AddTodo);

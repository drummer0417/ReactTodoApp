var React = require ('react');

var AddTodo = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.todoText.value;
    if (text.length > 0) {
      this.refs.todoText.value= '';
      this.props.onAddTodo(text);
    }
    // handleAddTodo(text);
  },
  render: function (){
    return(
      <div>
        <form name='form' onSubmit={this.handleSubmit}>
          <input type='text' ref='todoText' placeholder='Wah gaduh gij doen?' autoFocus/>
          <button className='button expanded hollow'>Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;

var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
import {connect} from 'react-redux';

import * as actions from 'actions';

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

export var TodoApp = React.createClass({
  onLogout: function (e) {
    e.preventDefault();
      var {dispatch} = this.props;
      dispatch(actions.startLogout());
    },
  render: function() {

    return(
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>logout</a>
        </div>

        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-12 medium-11 large-5 '>
            <div className='container'>
              <TodoSearch />
              <TodoList />
              <AddTodo  />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect() (TodoApp);

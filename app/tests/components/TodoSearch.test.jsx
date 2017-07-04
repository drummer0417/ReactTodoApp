var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {

  it('Should exist', () => {

    expect(TodoSearch).toExist();
  });

  it('Should dispatch SET_SEARCH_TEXT on input change', ()=> {
    var searchText = 'new'
    var spy = expect.createSpy();
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should dispatch TOGGLE_SHOW_COMPLETED on input change', () => {
    var spy = expect.createSpy();
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});

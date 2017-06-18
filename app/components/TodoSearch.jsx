var React = require('react');

var TodoSearch = React.createClass({

  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
   return(
     <div>
       <div>
         <input type='search' ref='searchText' onChange={this.handleSearch} placeholder='Search todo' />
       </div>
       <div>
         <label>
           <input type='checkbox' ref='showCompleted' onChange={this.handleSearch} />
           Show completed todos
         </label>
       </div>
     </div>
   )
  }
});

module.exports = TodoSearch;
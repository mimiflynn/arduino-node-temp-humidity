var React = require('react');

var Item = require('./item');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    isAuthenticated: React.PropTypes.bool,
    data: React.PropTypes.array,
    page: React.PropTypes.number,
    pages: React.PropTypes.number
  },
  render: function () {
    var items = this.props.data.map(function (item, index) {
      return (
        <li className="list-group-item" key={ item._id }>
          <Item data={ item } />
        </li>
      );
    });
    return (
      <ul className="list-group">
        { items }
      </ul>
    );
  }
});


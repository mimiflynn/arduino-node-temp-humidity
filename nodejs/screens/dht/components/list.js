import  { PropTypes } from 'react';

import Item from './item';

const List = ({}) => {
    var items = this.props.data.map(function (item, index) {
      return (
        <li className="list-group-item" key={ 'dht-' + index }>
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

List.propTypes = {
  title: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  data: PropTypes.array,
  page: PropTypes.number,
  pages: PropTypes.number
};

export default Item;

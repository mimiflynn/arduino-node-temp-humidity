import React, { Component, PropTypes } from 'react';

import moment from 'moment';

const Item = ({
  data
}) => (
  <dl>
    <dt>Date:</dt>
    <dd>{ moment(data.date).format('MMMM Do YYYY, h:mm:ss a') }</dd>
    <dt>Temp: </dt>
    <dd>{ data.fahrenheit }</dd>
    <dt>Dew Point:</dt>
    <dd>{ data.hif }</dd>
    <dt>Humidity</dt>
    <dd>{ data.humidity }</dd>
  </dl>
);

Item.propTypes = {
  data: PropTypes.object
};

export default Item;

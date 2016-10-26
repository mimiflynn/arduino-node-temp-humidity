import React, { Component, PropTypes } from 'react';

import DefaultLayout from '../layouts/default';

import Graph from './components/graph';
import List from './components/list';

const scripts = [
  'app.js'
];

// ToDo - set up isomorphic rendering
// refer to home.index
// already rendering from server
// need to re-render in client with data for chart
class Dht extends Component {
  render () {
    const data = 'window.data = ' + JSON.stringify(this.props.data) + '';

    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated } scripts={ scripts }>
        <div id="graph" />
        <div className="container">
          <svg id="visualization" width="800" height="500" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>
        </div>
        <div className="container">
          <List data={ this.props.data } />
        </div>
        <script dangerouslySetInnerHTML={{__html: data}} />
      </DefaultLayout>
    );
  }
};

Dht.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  data: PropTypes.array
};

export default Dht;

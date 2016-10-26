import React, { Component, PropTypes } from 'react';

import initChart from '../../../lib/graph.js';
import List from '../../../screens/dht/components/list';

class chartD3 extends Component {
  constructor (props) {
    super(props);

    this.state = {
      width: 800,
      height: 500,
      margins : {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      },
      yLeftDomain: [50, 82],
      yRightDomain: [20, 50]
    };

    this.onHumChange = this.onHumChange.bind(this);
    this.onHumEnter = this.onHumEnter.bind(this);
    this.onTempChange = this.onTempChange.bind(this);
    this.onTempEnter = this.onTempEnter.bind(this);
  }

  onHumChange (value) {
    this.setState({
      yRightDomain: value.split(',')
    });
  }

  onHumEnter (event) {
    if (event.key === 'Enter') {
      this.onHumChange(event.target.value);
    }
  }

  onTempChange (value) {
    this.setState({
      yLeftDomain: value.split(',')
    });
  }

  onTempEnter (event) {
    if (event.key === 'Enter') {
      this.onTempChange(event.target.value);
    }
  }

  componentDidUpdate () {
    document.getElementById('visualization').innerHTML = '';
    initChart(Object.assign(this.state, {
      dht: this.props.data
    }));
  }

  render () {
    return (
      <div className="container">
        <div className="row margin-top-20 margin-bottom-20">
          <div className="col-md-12">
            <h2 className="margin-bottom-20">Temperature and humidity over time</h2>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-addon" id="temp">Temperature [low, high]</span>
              <input type="text" ref="yLeftDomain" className="form-control" placeholder={this.state.yLeftDomain} onKeyPress={this.onTempEnter} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <input type="text" ref="yRightDomain" className="form-control" placeholder={this.state.yRightDomain} onKeyPress={this.onHumEnter} />
              <span className="input-group-addon" id="temp">Humidity [low, high]</span>
            </div>
          </div>
        </div>
        <div className="row">
          <svg id="visualization" width="800" height="500" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>
        </div>
        <div className="row">
          <List data={this.props.data} />
        </div>
      </div>
    );
  }
};

chartD3.propTypes = {
  data: React.PropTypes.array
};

module.exports = chartD3;

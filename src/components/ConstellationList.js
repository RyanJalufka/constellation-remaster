import React, { Component } from 'react';
import { connect } from 'react-redux';
import Data from '../Data/data.json';
import { selectConstellation } from '../actions/index';

class ConstellationList extends Component {

  renderList() {
    return Data[`${this.props.month}`].map(obj => {
      return(
        <li key={obj.name} onClick={() => selectConstellation(obj.name)}>{obj.name}</li>
      );
    })
  }
  

  render() {
    if(this.props.render) {
      return(
        <div>
          <ul>{this.renderList()}</ul>
        </div>
      );
    } else {
      return <div></div>
    }
  }

}
export default connect(null, { selectConstellation })(ConstellationList);
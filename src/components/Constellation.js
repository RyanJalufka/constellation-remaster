import React, { Component } from 'react';
import { connect } from 'react-redux';

class Constellation extends Component {

  render() {
    return(
      <h1> hey{this.props.constellation}</h1>
    );
  }

}

function mapStateToProps(state) {
  return{
    constellation: state.constellation
  };
}

export default connect(mapStateToProps, null)(Constellation);
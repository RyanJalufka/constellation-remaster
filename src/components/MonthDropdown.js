import React, { Component } from 'react';
import Select from 'react-select';
import ConstellationList from './ConstellationList';

class MonthDropdown extends Component {

  constructor(props) {
    super(props);

    this.state = { 
        month: '',
        render: false }
  }

  render() {

    const months = [
      { label: "January", value: "January"},
      { label: "February", value: "February"},
      { label: "March", value: "March"},
      { label: "April", value: "April"},
      { label: "May", value: "May"},
      { label: "June", value: "June"},
      { label: "July", value: "July"},
      { label: "August", value: "August"},
      { label: "September", value: "September"},
      { label: "October", value: "October"},
      { label: "November", value: "November"},
      { label: "December", value: "December"},
    ];

    return(
      <div id="dropdown-wrapper">
        <div id="dropdown-box">
        <p>Select a month:</p>
          <Select 
            options={months} 
            onChange={opt => this.setState({
              month: opt.label,
              render: true
            })}/>
        </div>
            <ConstellationList 
              month={this.state.month}
              render={this.state.render} />
      </div>

    );
  }

}

export default MonthDropdown;
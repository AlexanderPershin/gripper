import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    let data = [];
    if (this.props.numOfSprings === 1) {
      data = this.props.data1;
    } else {
      if (this.props.numOfSprings === 2) {
        data = this.props.data2;
      } else {
        data = this.props.data3;
      }
    }
    return (
      <div className='table'>
        {data.map((item, i) => (
          <div
            className={
              this.props.selectedItem === item.pressure
                ? 'item selected-item'
                : 'item'
            }
            key={i}
          >
            {item.pressure}
          </div>
        ))}
      </div>
    );
  }
}

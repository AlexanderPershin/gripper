import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className='table'>
        {data.map((item, i) => (
          <div
            className={
              this.props.selectedIndex === i ? 'item selected-item' : 'item'
            }
            key={i}
            onClick={() =>
              this.props.handleSetPressure(
                item.pressure,
                i,
                item.spring_1_pos,
                item.spring_2_pos,
                item.spring_3_pos
              )
            }
          >
            {item.pressure}
          </div>
        ))}
      </div>
    );
  }
}

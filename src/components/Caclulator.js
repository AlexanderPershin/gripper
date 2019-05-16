import React, { Component } from 'react';

import InfoBtn from './InfoBtn';

import SpringSvg from './SpringSvg';
import Table from './Table';

import data1 from '../data_1.json';
import data2 from '../data_2.json';
import data3 from '../data_3.json';

export default class Caclulator extends Component {
  state = {
    numOfSprings: 1,
    selectedPressure: 5.8
  };

  ifSelected = num => {
    if (num === this.state.numOfSprings) {
      return 'header-btn header-btn-selected';
    } else {
      return 'header-btn';
    }
  };

  ifSelectedSprColor = num => {
    if (num === this.state.numOfSprings) {
      return '#f23e2e';
    } else {
      return '#ffb454';
    }
  };

  handleSelectNumOfSprings = num => {
    this.setState(prevState => ({ numOfSprings: num }));
  };

  render() {
    return (
      <main className='calc'>
        <div className='calc-header'>
          <div className='header-label'>Set number of springs</div>
          <div className='header-btns'>
            <button
              className={this.ifSelected(1)}
              onClick={() => this.handleSelectNumOfSprings(1)}
              title='1 spring'
            >
              <SpringSvg
                sprColor={this.ifSelectedSprColor(1)}
                sprHeight='30px'
                sprWidth='30px'
              />
            </button>
            <button
              className={this.ifSelected(2)}
              onClick={() => this.handleSelectNumOfSprings(2)}
              title='2 springs'
            >
              <SpringSvg
                sprColor={this.ifSelectedSprColor(2)}
                sprHeight='30px'
                sprWidth='30px'
              />
              <SpringSvg
                sprColor={this.ifSelectedSprColor(2)}
                sprHeight='30px'
                sprWidth='30px'
              />
            </button>
            <button
              className={this.ifSelected(3)}
              onClick={() => this.handleSelectNumOfSprings(3)}
              title='3 springs'
            >
              <SpringSvg
                sprColor={this.ifSelectedSprColor(3)}
                sprHeight='30px'
                sprWidth='30px'
              />
              <SpringSvg
                sprColor={this.ifSelectedSprColor(3)}
                sprHeight='30px'
                sprWidth='30px'
              />
              <SpringSvg
                sprColor={this.ifSelectedSprColor(3)}
                sprHeight='30px'
                sprWidth='30px'
              />
            </button>
            <InfoBtn info='Choose number of springs' />
          </div>
        </div>

        <div className='calc-body'>
          <div className='press'>
            <div className='press-label'>Pressure (kg)</div>
            <div className='press-value'>
              <div className='num'>5,80</div>
              <button className='increase-press-btn'>+</button>
              <button className='decrease-press-btn'>-</button>
              <InfoBtn info='Select the pressure' />
            </div>
          </div>
          <div className='sprpos'>
            <div className='sprpos-label'>Springs Position</div>
            <div className='sprpos-vals'>
              <div className='sprpos-val'>1</div>
              <div className='sprpos-val'>3</div>
              <div className='sprpos-val'>5</div>
              <InfoBtn info='Here you can see springs posinion' />
            </div>
          </div>
          <div className='presstable'>
            <div className='presstalbe-label'>Select Pressure</div>
            <div className='presstable-body'>
              <InfoBtn info='Choose Pressure from the table' />
            </div>
          </div>
          <Table
            selectedItem={this.state.selectedPressure}
            numOfSprings={this.state.numOfSprings}
            data1={data1}
            data2={data2}
            data3={data3}
          />
        </div>
      </main>
    );
  }
}

import React, { Component } from 'react';

import InfoBtn from './InfoBtn';

import SpringSvg from './SpringSvg';
import Table from './Table';

import data1 from '../data_1.json';
import data2 from '../data_2.json';
import data3 from '../data_3.json';

export default class Caclulator extends Component {
  state = {
    data: data1,
    numOfSprings: 1,
    selectedPressure: 5.8,
    selectedIndex: 0,
    spr1: 1,
    spr2: null,
    spr3: null,
    showUpBtn: false
  };

  wrightToLocalStorage = (pressure, index, spr1, spr2, spr3) => {
    localStorage.setItem(
      'gripper',
      JSON.stringify({
        numOfSprings: this.state.numOfSprings,
        selectedIndex: index,
        selectedPressure: pressure,
        spring_1_pos: spr1,
        spring_2_pos: spr2,
        spring_3_pos: spr3
      })
    );
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    const savedData = JSON.parse(localStorage.getItem('gripper'));
    if (savedData) {
      const {
        numOfSprings,
        selectedIndex,
        selectedPressure,
        spring_1_pos,
        spring_2_pos,
        spring_3_pos
      } = savedData;
      let newData;
      if (savedData.numOfSprings === 1) {
        newData = data1;
      } else {
        if (savedData.numOfSprings === 2) {
          newData = data2;
        } else {
          newData = data3;
        }
      }
      this.setState({
        data: newData,
        numOfSprings,
        selectedIndex,
        selectedPressure,
        spr1: spring_1_pos,
        spr2: spring_2_pos,
        spr3: spring_3_pos
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

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
    const savedData = JSON.parse(localStorage.getItem('gripper'));

    let newSelectedIndex;
    let newPress;
    let spring_1_pos, spring_2_pos, spring_3_pos;
    let newData;

    if (num === 1) {
      if (savedData && savedData.numOfSprings === 1) {
        newSelectedIndex = savedData.selectedIndex;
        newPress = savedData.selectedPressure;
        spring_1_pos = savedData.spring_1_pos;
        spring_2_pos = savedData.spring_2_pos;
        spring_3_pos = savedData.spring_3_pos;
        newData = data1;
      } else {
        newSelectedIndex = 0;
        newPress = data1[0].pressure;
        spring_1_pos = data1[0].spring_1_pos;
        spring_2_pos = data1[0].spring_2_pos;
        spring_3_pos = data1[0].spring_3_pos;
        newData = data1;
      }
    } else {
      if (num === 2) {
        if (savedData && savedData.numOfSprings === 2) {
          newSelectedIndex = savedData.selectedIndex;
          newPress = savedData.selectedPressure;
          spring_1_pos = savedData.spring_1_pos;
          spring_2_pos = savedData.spring_2_pos;
          spring_3_pos = savedData.spring_3_pos;
          newData = data2;
        } else {
          newSelectedIndex = 0;
          newPress = data2[0].pressure;
          spring_1_pos = data2[0].spring_1_pos;
          spring_2_pos = data2[0].spring_2_pos;
          spring_3_pos = data2[0].spring_3_pos;
          newData = data2;
        }
      } else {
        if (savedData && savedData.numOfSprings === 3) {
          newSelectedIndex = savedData.selectedIndex;
          newPress = savedData.selectedPressure;
          spring_1_pos = savedData.spring_1_pos;
          spring_2_pos = savedData.spring_2_pos;
          spring_3_pos = savedData.spring_3_pos;
          newData = data3;
        } else {
          newSelectedIndex = 0;
          newPress = data3[0].pressure;
          spring_1_pos = data3[0].spring_1_pos;
          spring_2_pos = data3[0].spring_2_pos;
          spring_3_pos = data3[0].spring_3_pos;
          newData = data3;
        }
      }
    }

    this.setState(prevState => ({
      data: newData,
      numOfSprings: num,
      selectedPressure: newPress,
      selectedIndex: newSelectedIndex,
      spr1: spring_1_pos,
      spr2: spring_2_pos,
      spr3: spring_3_pos
    }));
  };

  handleSetPressure = (pressure, index, spr1, spr2, spr3) => {
    this.wrightToLocalStorage(pressure, index, spr1, spr2, spr3);

    this.setState({
      selectedPressure: pressure,
      selectedIndex: index,
      spr1,
      spr2,
      spr3
    });
  };

  handleIncreasePressure = () => {
    if (this.state.selectedIndex < this.state.data.length - 1) {
      const newElem = this.state.data[this.state.selectedIndex + 1];
      const newPressure = newElem.pressure;
      const newSelectedIndex = this.state.selectedIndex + 1;
      const newSpr1 = newElem.spring_1_pos;
      const newSpr2 = newElem.spring_2_pos || null;
      const newSpr3 = newElem.spring_3_pos || null;

      this.wrightToLocalStorage(
        newPressure,
        newSelectedIndex,
        newSpr1,
        newSpr2,
        newSpr3
      );

      this.setState({
        selectedPressure: newPressure,
        selectedIndex: newSelectedIndex,
        spr1: newSpr1,
        spr2: newSpr2,
        spr3: newSpr3
      });
    }
  };

  handleDecreasePressure = () => {
    if (this.state.selectedIndex > 0) {
      const newElem = this.state.data[this.state.selectedIndex - 1];
      const newPressure = newElem.pressure;
      const newSelectedIndex = this.state.selectedIndex - 1;
      const newSpr1 = newElem.spring_1_pos;
      const newSpr2 = newElem.spring_2_pos || null;
      const newSpr3 = newElem.spring_3_pos || null;

      this.wrightToLocalStorage(
        newPressure,
        newSelectedIndex,
        newSpr1,
        newSpr2,
        newSpr3
      );

      this.setState({
        selectedPressure: newPressure,
        selectedIndex: newSelectedIndex,
        spr1: newSpr1,
        spr2: newSpr2,
        spr3: newSpr3
      });
    }
  };

  handleScroll = () => {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const scrollOffset = document.documentElement.scrollTop;
    const sbHeight =
      window.innerHeight * (window.innerHeight / document.body.offsetHeight);

    if (Math.ceil(scrollOffset) + sbHeight >= scrollHeight) {
      this.setState({ showUpBtn: true });
    } else {
      this.setState({ showUpBtn: false });
    }
  };

  handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <main className='calc'>
        <div className='calc-header'>
          <div className='header-label'>Количество пружин</div>
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
            <InfoBtn info='Кол-во пружин в эспандере' />
          </div>
        </div>

        <div className='calc-body'>
          <div className='press'>
            <div className='press-label'>Нагрузка (кг)</div>
            <div className='press-value'>
              <div className='btn-wrapper'>
                <button
                  className='decrease-press-btn'
                  onClick={this.handleDecreasePressure}
                >
                  -
                </button>
              </div>
              <div className='num'>{this.state.selectedPressure}</div>
              <div className='btn-wrapper'>
                <button
                  className='increase-press-btn'
                  onClick={this.handleIncreasePressure}
                >
                  +
                </button>
              </div>
              <InfoBtn info='Увеличьте/уменьшите нагрузку' />
            </div>
          </div>
          <div className='sprpos'>
            <div className='sprpos-label'>Положение пружин</div>
            <div className='sprpos-vals'>
              <div className='sprpos-val' title='spring 1 position'>
                {this.state.spr1}
              </div>
              <div className='sprpos-val' title='spring 2 position'>
                {this.state.spr2}
              </div>
              <div className='sprpos-val' title='spring 3 position'>
                {this.state.spr3}
              </div>
              <InfoBtn info='Положение пружин на делениях' />
            </div>
          </div>
          <div className='presstable'>
            <div className='presstalbe-label'>Выберите усилие (кг)</div>
            <div className='presstable-body'>
              <InfoBtn info='Укажите усилие из таблицы' />
            </div>
          </div>
          <Table
            selectedItem={this.state.selectedPressure}
            selectedIndex={this.state.selectedIndex}
            numOfSprings={this.state.numOfSprings}
            data1={data1}
            data2={data2}
            data3={data3}
            data={this.state.data}
            handleSetPressure={this.handleSetPressure}
          />
        </div>
        {this.state.showUpBtn ? (
          <button className='up-btn' onClick={this.handleScrollTop}>
            Вверх
          </button>
        ) : null}
      </main>
    );
  }
}

import React, { Component } from 'react';
import uuid from 'uuid';

export default class InfoBtn extends Component {
  state = {
    showInfo: false,
    compId: uuid.v4()
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutClick);
  }

  handleOutClick = e => {
    if (this.state.compId === e.target.id) {
      console.log('info', this.state.compId);
    } else {
      this.setState({ showInfo: false });
    }
  };

  handleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const info = this.props.info;
    const show = this.state.showInfo;

    return (
      <div
        className={show ? 'info-btn info-active' : 'info-btn'}
        onClick={this.handleShowInfo}
        id={this.state.compId}
        control='hello'
      >
        ?{show ? <div className='info-text'>{info}</div> : null}
      </div>
    );
  }
}

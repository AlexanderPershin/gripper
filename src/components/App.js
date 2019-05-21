import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import Calculator from './Caclulator';

import gripper_img from '../img/gripper_img.png';
import githubicon from '../img/github.png';

class App extends Component {
  renderContent = () =>
    navigator.language === 'ru-RU' ? (
      <Redirect to='/ru' />
    ) : (
      <div className='app'>
        <header className='app-header'>
          <img
            className='app-picture'
            src={gripper_img}
            alt='gripper_picture'
          />
          <div className='app-greeting'>
            <h1 className='app-name'>Gripper Calculator</h1>
            <ul className='app-items'>
              <li className='item'>Hammar Vice Gripper</li>
              <li className='item'>Woody Vice Gripper</li>
              <li className='item'>Ivanko Super Gripper</li>
            </ul>
          </div>
        </header>
        <Calculator />
        <footer className='app-footer'>
          <a
            href='https://github.com/AlexanderPershin/gripper'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='footer-text'>View code on GitHub</span>
            <img src={githubicon} alt='github' />
          </a>
        </footer>
      </div>
    );

  render() {
    return this.renderContent();
  }
}

export default App;

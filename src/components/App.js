import React from 'react';

import Calculator from './Caclulator';

import gripper_img from '../img/gripper_img.png';
import githubicon from '../img/github.png';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <img className='app-picture' src={gripper_img} alt='gripper_picture' />
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
        View code on GitHub{' '}
        <a
          href='https://github.com/AlexanderPershin/gripper'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={githubicon} alt='github' />
        </a>
      </footer>
    </div>
  );
}

export default App;

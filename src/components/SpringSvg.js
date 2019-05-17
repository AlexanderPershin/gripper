import React, { Component } from 'react';

export default class SpringSvg extends Component {
  render() {
    const { sprColor, sprHeight, sprWidth } = this.props;

    return (
      <div className='spricon'>
        <svg
          version='1.0'
          xmlns='http://www.w3.org/2000/svg'
          width={sprWidth}
          height={sprHeight}
          viewBox='0 0 200.000000 200.000000'
          preserveAspectRatio='xMidYMid meet'
        >
          <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g
            transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
            fill={sprColor}
            stroke='none'
          >
            <path
              d='M903 1920 c-150 -21 -282 -70 -332 -123 -13 -14 -27 -44 -31 -67 -8
       -43 3 -115 22 -137 16 -20 56 -15 91 11 97 73 202 90 550 91 l289 0 13 25 c8
       14 14 53 15 87 0 51 -4 67 -24 90 l-24 27 -253 2 c-140 2 -282 -1 -316 -6z'
            />
            <path
              d='M815 1647 c-60 -20 -165 -69 -165 -77 0 -4 42 -25 94 -47 l94 -41
       164 33 c90 18 199 38 243 45 44 6 91 14 105 17 l25 5 -24 9 c-13 5 -85 21
       -160 35 -167 31 -320 39 -376 21z'
            />
            <path
              d='M1250 1534 c-345 -44 -648 -147 -692 -234 -21 -41 -24 -133 -5 -170
       19 -38 55 -37 114 3 144 97 492 187 722 187 79 0 81 1 96 30 23 44 20 141 -6
       174 -24 31 -58 32 -229 10z'
            />
            <path
              d='M810 1171 c-62 -26 -136 -69 -150 -86 -14 -17 -3 -23 106 -51 l72
       -18 228 42 c126 23 247 44 269 48 35 6 37 7 18 15 -55 20 -298 61 -393 65 -88
       4 -112 1 -150 -15z'
            />
            <path
              d='M1210 1059 c-364 -54 -628 -150 -659 -239 -16 -46 -14 -126 4 -160
       18 -36 62 -41 89 -11 26 29 149 85 262 120 143 45 281 70 414 77 147 7 154 8
       168 39 25 54 11 165 -22 187 -18 13 -124 7 -256 -13z'
            />
            <path
              d='M782 692 c-85 -31 -138 -59 -128 -69 3 -4 47 -23 96 -44 l90 -38 202
       40 c112 22 231 43 266 46 34 3 62 9 62 13 0 7 -131 36 -264 60 -32 5 -99 12
       -150 15 -83 6 -98 4 -174 -23z'
            />
            <path
              d='M1350 604 c-14 -2 -65 -9 -115 -15 -325 -39 -638 -147 -680 -235 -17
       -36 -20 -136 -5 -164 23 -44 47 -44 111 -1 141 94 436 174 702 190 106 6 112
       7 124 31 7 14 13 53 13 86 0 102 -31 125 -150 108z'
            />
            <path
              d='M930 281 c-48 -8 -173 -57 -227 -91 -62 -38 -40 -51 115 -69 208 -24
       544 -32 629 -15 25 5 43 49 43 109 0 75 -2 75 -276 74 -131 -1 -259 -5 -284
       -8z'
            />
          </g>
        </svg>
      </div>
    );
  }
}
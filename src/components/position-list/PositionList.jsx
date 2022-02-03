import React, { useState } from 'react';
import { positionsDB } from '../../utils/positions';
import PositionListItem from '../position-list-item/PositionListItem';
import Range from '../range/Range';
import './PositionList.css';

import mpVsUtg from './assets/01_MP_vs_UTG.png';
import coVsUtg from './assets/02_CO_vs_UTG.png';
import btnVsUtg from './assets/03_BTN_vs_UTG.png';
import sbVsUtg from './assets/04_SB_vs_UTG.png';
import bbVsUtg from './assets/05_BB_vs_UTG.png';
import coVsMp from './assets/06_CO_vs_MP.png';
import btnVsMp from './assets/07_BTN_vs_MP.png';
import sbVsMp from './assets/08_SB_vs_MP.png';
import bbVsMp from './assets/09_BB_vs_MP.png';
import btnVsCo from './assets/10_BTN_vs_CO.png';
import sbVsCo from './assets/11_SB_vs_CO.png';
import bbVsCo from './assets/12_BB_vs_CO.png';
import sbVsBtn from './assets/13_SB_vs_BTN.png';
import bbVsBtn from './assets/14_BB_vs_BTN.png';
import bbVsSb from './assets/15_BB_vs_SB.png';

const PositionList = () => {

  const ranges = [
    mpVsUtg, coVsUtg, btnVsUtg, sbVsUtg, bbVsUtg,
    coVsMp, btnVsMp, sbVsMp, bbVsMp,
    btnVsCo, sbVsCo, bbVsCo,
    sbVsBtn, bbVsBtn,
    bbVsSb 
  ];

  const [srcRange, setSrcRange] = useState('');


  const setRange = src => {
    const foundedRange = ranges.find(range => range.includes(src.slice(0, -4)));
     setSrcRange(foundedRange);
  }
  
  const positions = positionsDB;
  return (
    <>
      <ul className="position-list">
        {positions.map(position => (
          <PositionListItem position={position} key={position.id} setRange={setRange}/>
        ))}
      </ul>
      { srcRange && <Range src={srcRange}/> }
    </>
  );
};

export default PositionList;

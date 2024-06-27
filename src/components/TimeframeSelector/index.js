import React from 'react';
import {TimeProgressBtn } from '../../styledComponents';
const TimeframeSelector = ({ onSelect }) => (
  <div style={{flexWrap: 'wrap'}}>
    <TimeProgressBtn onClick={() => onSelect('daily')}>Daily</TimeProgressBtn>
    <TimeProgressBtn onClick={() => onSelect('weekly')}>Weekly</TimeProgressBtn>
    <TimeProgressBtn onClick={() => onSelect('monthly')}>Monthly</TimeProgressBtn>
  </div>
);

export default TimeframeSelector;


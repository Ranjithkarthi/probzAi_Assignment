import React, { useState } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import {ChartContainer} from './styledComponents';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');
  
  return (
    <ChartContainer>
      <Chart timeframe={timeframe} />
      <TimeframeSelector onSelect={setTimeframe} />
    </ChartContainer>
  );
};

export default App;

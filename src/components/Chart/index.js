import React, { useState, useEffect } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Brush, ResponsiveContainer} from 'recharts';
import fetchData from '../../data';

const Chart = ({ timeframe }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  const filterData = (data, timeframe) => {
    if (timeframe === 'daily') {
      return data;
    } else if (timeframe === 'weekly') {
      return data.reduce((acc, current, index) => {
        if (index % 7 === 0) {
          acc.push(current);
        }
        return acc;
      }, []);
    } else if (timeframe === 'monthly') {
      const months = {};
      data.forEach(item => {
        const month = new Date(item.timestamp).getMonth();
        if (!months[month]) {
          months[month] = { ...item, count: 1 };
        } else {
          months[month].value += item.value;
          months[month].count += 1;
        }
      });
      return Object.values(months).map(item => ({
        ...item,
        value: item.value / item.count
      }));
    }
    return data;
  };

  const filteredData = filterData(data, timeframe);

  return (
    <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#82ca9d"
            fill="#82ca9d"
            onClick={(data) => {
              alert(`Timestamp: ${data.timestamp}\nValue: ${data.value}`);
            }}
          />
          <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;

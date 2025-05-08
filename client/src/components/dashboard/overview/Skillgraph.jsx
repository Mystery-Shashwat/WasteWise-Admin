import React from 'react'
import { AreaChart, XAxis, YAxis, Area, CartesianGrid, Tooltip } from 'recharts';
const Skillgraph = () => {
  const data = [
    {
      "name": "0",
      "uv": 5000,
      "pv": 2700,
      "amt": 2400
    },
    {
      "name": "20",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "40",
      "uv": 7000,
      "pv": 5398,
      "amt": 2210
    }, {
      "name": "60",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "80",
      "uv": 5000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "100",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },

  ]
  return (
    <AreaChart width={180} height={140} fontSize={10}  data={data} className='chart'
      margin={{ top: 10, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
     / <XAxis dataKey="name" />
     
     
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} style={{fontSize:".3rem"}} fill="url(#colorPv)" />
    </AreaChart>
  )
}

export default Skillgraph
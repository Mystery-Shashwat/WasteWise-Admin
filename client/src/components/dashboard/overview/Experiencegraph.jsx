import React from 'react'
import { CChart } from '@coreui/react-chartjs'
const Experiencegraph = () => {
  return (
    <CChart
      type="bar"
      height="150px"
      width="150px"
      
      data={{
        labels: ['Graphic Design', 'UI/UX Design', 'Photoshop'],
        datasets: [
          {
           
            backgroundColor: 'rgba(21, 148, 212, 1)',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
            barThickness: 9,
            grid: {
              offset: true
            },
          },
          
        ],
        
        
      }}
      labels="months"
    />
  )
}

export default Experiencegraph
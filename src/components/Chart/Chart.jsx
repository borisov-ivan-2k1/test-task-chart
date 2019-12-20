import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = (props) => {

  return (
    <div>
      <Line
        height={130}  
        data={{
          labels: props.data.labels,
          datasets: [
            {
              label: 'Выпущено автомобилей',
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              pointRadius: 3,
              pointHitRadius: 10,
              height: 300,
              data: props.data.data,
            },
          ],
        }}
      />
    </div>
  )
}

export default Chart

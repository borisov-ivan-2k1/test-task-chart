import React, { Component } from 'react'

import Chart from '../components/Chart'

class ChartContainer extends Component {
  componentDidMount() {
    fetch('http://localhost:3003/cars')
      .then(res => res.json())
      .then(result => {
        let labels = []
        let data = []
        result.map((json, i) => {
          if (i > result.length - 30) {
            labels.push(json.date)
            data.push(json.car)

          }
        })
        const postData = {
          labels: labels,
          data: data,
        }
        this.props.setData(postData)
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      fetch('http://localhost:3003/cars')
        .then(res => res.json())
        .then(result => {
          let labels = []
          let data = []
          if (this.props.type === 'days') {
            result.map((json, i) => {
              if (i > result.length - 30) {
                labels.push(json.date)
                data.push(json.car)
              }
            })
          }

          else if (this.props.type === 'months') {

            let answer = { 2016: {}, 2017: {}, 2018: {}, 2019: {} }
            let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

            for (let key in answer) {
              result.map((json, i) =>

                json.date.split('/')[2] === key + '' ? (months.map(month => {
                  if (month === json.date.split('/')[0]) {
                    answer[key][month] = 0
                  }
                })) : null
              )
            }

            for (let key in answer) {
              result.map(json =>
                json.date.split('/')[2] === key ? (months.map(month => {

                  if (month === json.date.split('/')[0]) {
                    answer[key][month] += json.car
                  }
                })) : null
              )
              for (let key2 in answer[key]) {
                  labels.push(`${key2}/${key}`)
                  data.push(answer[key][key2])
                
              }
            }
          }

          else if (this.props.type === 'years') {

            let answer = { 2016: 0, 2017: 0, 2018: 0, 2019: 0 }

            for (let key in answer) {
              result.map(json =>
                json.date.split('/')[2] === key + '' ? answer[key] += json.car : null
              )
              labels.push(key)
              data.push(answer[key])
            }
          }

          const postData = {
            labels: labels,
            data: data,
          }
          this.props.setData(postData)
        })
    }
  }

  render() {


    return (
      <>
        <Chart data={this.props.data} />
      </>
    )
  }
}

export default ChartContainer

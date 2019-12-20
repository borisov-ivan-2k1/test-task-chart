import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setType } from '../redux/actions/navigation'
import { setData } from '../redux/actions/chart'

import ChartContainer from './ChartContainer'
import NavigationContainer from './NavigationContainer'

class AppContainer extends Component {
  render() {
    const { chart, setData, navigation, setType } = this.props

    return (
      <>
        <NavigationContainer type={navigation.type} setType={setType} />
        <ChartContainer
          data={chart.data}
          setData={setData}
          type={navigation.type}
        />
      </>
    )
  }
}

const mapStateToProps = store => ({
  chart: store.chart,
  navigation: store.navigation,
})

const mapDispatchToProps = dispatch => ({
  setType: type => dispatch(setType(type)),
  setData: data => dispatch(setData(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

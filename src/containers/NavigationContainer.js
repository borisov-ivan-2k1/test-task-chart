import React, { Component } from 'react'

import Navigation from '../components/Navigation'

class NavigationContainer extends Component {
  render() {
    const { type, setType } = this.props

    return (
      <>
        <Navigation type={type} setType={setType} />
      </>
    )
  }
}

export default NavigationContainer

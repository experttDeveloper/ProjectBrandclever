import React, { Component } from 'react'
import Tabs from '../components/Tabs'
import TopHeader from '../components/TopHeader'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio-page'>
        <div className='portfolio-inner'>
          <TopHeader title="Portfolio's" />

          <Tabs />

        </div>
      </div>
    )
  }
}

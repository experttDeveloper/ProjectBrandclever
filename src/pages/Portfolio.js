import React, { Component } from 'react'
import TopHeader from '../components/TopHeader'
import PortfolioComponent from '../components/Portfolio'
import JoinTeam from '../components/JoinTeam'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio-page'>
        <div className='portfolio-inner'>
          <TopHeader title="Portfolio's" description="Discover our latest and standout projects. From recent innovations to featured highlights, explore our portfolio showcasing excellence and creativity across diverse industries."/>

          <PortfolioComponent/>
          <JoinTeam/>

        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import TopHeader from '../components/TopHeader'
import PortfolioComponent from '../components/Portfolio'
import JoinTeam from '../components/JoinTeam'
import MetaTitleDes from '../components/MetaTitleDes'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio-page'>
        <MetaTitleDes title={"Check Out Our Premium Portfolio | Brandclever"} description={"Attract new opportunities and close more deals with our portfolio that effectively communicates your brand achievements. Your brand's future success is here."} />
        <div className='portfolio-inner'>
          <TopHeader title="Portfolio's" description="Discover our latest and standout projects. From recent innovations to featured highlights, explore our portfolio showcasing excellence and creativity across diverse industries."/>

          <PortfolioComponent/>
          <JoinTeam/>

        </div>
      </div>
    )
  }
}

//@flow

import React from 'react'
import {
  about_us_page,
  text,
  already_excited,
  button,
  about_header
} from './styles/aboutUs.module.scss'
import Header from '../header'
import WhatIs from './whatIs'
import BestPhone from './bestPhone'
import DiscoverApps from './discoverApps'
import CompareAnything from './compareAnything'
import Integrate from './integrate'
import Footer from '../footer/index'

const AboutUs = () => {
  const onFeedBackClick = () => { };

  return (
    <React.Fragment>
      <Header onFeedBackClick={onFeedBackClick} headerClass={about_header} />
      <div className={about_us_page}>
        <WhatIs />
        <BestPhone />
        <DiscoverApps />
        <CompareAnything />
        <Integrate />
        <div className={already_excited}>
          <div className={text}>
            Already excited?</div>
          <div className={button}>
            Try TechSpecs Now
        </div>
        </div>
        <Footer />
      </div>
    </React.Fragment >
  )
}

export default AboutUs

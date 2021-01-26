//@flow

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  text,
  description,
  photos,
  cards,
  mocup,
  what_is_part,
  text_tag,
  see_brand_button
} from './styles/whatIs.module.scss'
import {
  CARDS,
  MOCUP
} from 'common/images'

const WhatIs = () => {
  return (
    <div className={what_is_part}>
      <div className={text}>
        <h1>About Us</h1>
        <div className={description}>
          TechSpecs is the world’s leading platform for finding and comparing the standardized technical specifications of consumer electronics.
        </div>
        <div className={text_tag}>
          <span>Our mission is</span> to simplify and standardize the worlds' consumer electronics tech specs and make it easily accessible to mankind.
            </div>
        <div className={text_tag}>
          <span>Our vision is</span> to both create a global standard for tech specs and the world's largest ecosystem of consumer electronics.
            </div>
        <div className={see_brand_button}><Link to="/guideline">See Our Brand Guidelines</Link></div>

      </div>
      <div className={photos}>
        <img className={cards} src={CARDS} alt="CARDS"></img>
        <img className={mocup} src={MOCUP} alt="MOCUP"></img>
      </div>
    </div>

  )
}

export default WhatIs

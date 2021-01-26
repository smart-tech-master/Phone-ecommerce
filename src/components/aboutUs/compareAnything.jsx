//@flow

import React from 'react'
import {
  text,
  description,
  photos,
  compare_anything_part,
  start,
  screen1,
  screen2
} from './styles/compareAnything.module.scss'
import {
  SCREEN1,
  SCREEN2
} from 'common/images'

const CompareAnything = () => {

  return (
    <div className={compare_anything_part}>
      <div className={text}>
        <h1>Compare anything.</h1>
        <div className={description}>
          With our simple yet powerful comparison tool, you can compare any product with each other to find the best one that suits with your needs.
        </div>
        <div className={start}> Start Comparing </div>
      </div>
      <div className={photos}>
        <img className={screen1} src={SCREEN1}></img>
        <img className={screen2} src={SCREEN2}></img>
      </div>
    </div>
  )
}

export default CompareAnything

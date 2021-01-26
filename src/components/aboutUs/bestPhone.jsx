//@flow

import React from 'react'
import {
  best_phone_part,
  text,
  description,
  input,
  button_try_now,
  for_example,
  photos,
  photo,
  cards,
  background,
  mocup,
} from './styles/bestPhone.module.scss'
import {
  OBJ_PHONE,
  PATTERN
} from 'common/images'

const BestPhone = () => {

  return (
    <div className={best_phone_part}>
      <div className={text}>
        <h1>Which phone is the best?</h1>
        <div className={description}>
          Do you often ask that question to yourself? Then you are in the right place. TechSpecs is a tool for you to quickly browse and find recent specs for thousands of products.
        </div>
        <div className={input}>
          <input defaultValue="" placeholder="Enter a device name"></input>
          <div className={button_try_now}>Try it Now</div>
          <div className={for_example}><span>For example:</span> iPhone X, iPhone XS, iPad, Note 10</div>
        </div>
      </div>
      <div className={photos}>
        <img className={background} src={PATTERN} alt="PATTERN"></img>
        <img className={photo} src={OBJ_PHONE} alt="OBJ_PHONE"></img>
      </div>
    </div>
  )
}

export default BestPhone

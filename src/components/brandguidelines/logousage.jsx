//@flow

import React from 'react'
import {
  text,
  description,
  compare_anything_part,
  switch_toggle,
  slider,
  round,
  clear_seek,
  clear_space,
  clear,
  seek,
  image_padding,
} from './styles/logousage.module.scss'
import {
  BIG_LOGO
} from 'common/images'

const LogoUsage = () => {

  return (
    <div className={compare_anything_part}>
      <div className={text}>
        <h1>Logo usage.</h1>
        <div className={description}>
          It's important that we never modify our logo in any way,don't use our logo too small or use it in a way that makes it hard to read.
        </div>
      </div>
      <div className={clear_seek}>
        <div className={clear_space}>
          <span className={clear}>Clear space</span>
          <span className={seek}>Seek Dark Version</span>
        </div>
        <div>
          <label className={switch_toggle}>
            <input type="checkbox" />
            <span className={[slider, round].join(" ")}></span>
          </label>
        </div>
      </div>
      <div className={image_padding}>
        <img src={BIG_LOGO}></img>
      </div>

    </div >

  )
}

export default LogoUsage

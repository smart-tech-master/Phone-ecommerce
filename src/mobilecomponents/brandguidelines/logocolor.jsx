//@flow

import React from 'react'
import {
  minium_anything_part,
  minium_part,
  size_part,
  color_part,
  color1,
  color2,
  color3,
  color_item,
  size_title,
  size_pixel,
  size_image,
  part_area,
  color_title

} from './styles/logocolor.module.scss'
import {
  LOGO_IMG
} from 'common/images'

const LogoColor = () => {

  return (
    <div className={minium_anything_part}>
      <div className={minium_part}>
        <div className={size_part}>
          <h6 className={size_title}>Minimum size</h6>
          <p className={size_pixel}>Print:.125inch &bull;Digital:26 pixel</p>
          <img className={size_image} src={LOGO_IMG} />
        </div>
        <div className={color_part}>
          <h6 className={color_title}>Logo colors</h6>
          <div className={part_area}>
            <div className={[color_item, color1].join(" ")}>
              #03A9F4
            </div>
            <div className={[color_item, color2].join(" ")}>
              #03A9F4
            </div>
            <div className={[color_item, color3].join(" ")}>
              #03A9F4
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default LogoColor

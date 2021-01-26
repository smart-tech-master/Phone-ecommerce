//@flow

import React from 'react'
import {
  minium_anything_part,
  color_part,
  color1,
  color2,
  color3,
  color4,
  color_item,
  part_area,
  color_title,
  color1x,
  color2x,
  color3x,
  primary_part
} from './styles/primary.module.scss'
import {
  LOGO_IMG
} from 'common/images'

const PrimaryColor = () => {

  return (
    <div className={primary_part}>
      <div className={minium_anything_part}>
        <div className={color_part}>
          <h6 className={color_title}>Primary colors</h6>
          <div className={part_area}>
            <div className={[color_item, color1].join(" ")}>
              #03A9F4
            </div>
            <div className={[color_item, color2].join(" ")}>
              #1976D2
            </div>
            <div className={[color_item, color3].join(" ")}>
              #91A8BF
            </div>
            <div className={[color_item, color4].join(" ")}>
              #242B2E
            </div>
          </div>
        </div>

        <div className={color_part}>
          <h6 className={color_title}>Secondary colors</h6>
          <div className={part_area}>
            <div className={[color_item, color1x].join(" ")}>
              #FF8E76
            </div>
            <div className={[color_item, color2x].join(" ")}>
              #FA624D
            </div>
            <div className={[color_item, color3x].join(" ")}>
              #8BD001
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryColor

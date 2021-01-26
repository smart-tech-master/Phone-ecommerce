//@flow

import React from 'react'
import {
  brand_font_part,
  font_part,
  font,
  rect,
  font_description,
  big_font,
  small_font,
  medium_font,
  margin_adjust,
  title_font,
} from './styles/brandfont.module.scss'

const BrandFont = () => {

  return (
    <div className={brand_font_part}>
      <h6>Fonts</h6>
      <div className={font_part}>
        <div className={font}>
          <div className={rect}>
            <h1 className={big_font}>Aa</h1>
          </div>
          <div className={font_description}>
            <h1 className={title_font}>H1</h1>
            <span className={margin_adjust}>Proxima Nova - Extrabold</span>
            <span className={margin_adjust}>62px • Line Height: 84px</span>
          </div>
        </div>
        <div className={font}>
          <div className={rect}>
            <h2 className={medium_font}>Aa</h2>
          </div>
          <div className={font_description}>
            <h2 className={title_font}>H2</h2>
            <span className={margin_adjust}>Proxima Nova - Bold</span>
            <span className={margin_adjust}>28px • Line Height: 34px</span>
          </div>
        </div>
        <div className={font}>
          <div className={rect}>
            <h2 className={small_font}>Aa</h2>
          </div>
          <div className={font_description}>
            <h2 className={title_font}>H2</h2>
            <span className={margin_adjust}>Proxima Nova - Bold</span>
            <span className={margin_adjust}>24px • Line Height: 29px</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandFont

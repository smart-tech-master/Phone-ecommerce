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
  brown_font,
  brown_font1,
  text_adjust

} from './styles/brandtext.module.scss'

const BrandText = () => {

  return (
    <div className={brand_font_part}>
      <div className={font_part}>
        <div className={font}>
          <div className={font_description}>
            <h1 className={text_adjust}>Subtext</h1>
            <span className={[brown_font].join(" ")}>The quick brown fox jumps over the lazy dog.</span>
            <span className={margin_adjust}>Proxima Nova - Regular</span>
            <span className={margin_adjust}>22px • Line Height: 32px</span>
          </div>
        </div>
        <div className={font}>
          <div className={font_description}>
            <h1 className={text_adjust}>Content text</h1>
            <span className={[brown_font1].join(" ")}>The quick brown fox jumps over the lazy dog.</span>
            <span className={margin_adjust}>Proxima Nova - Regular</span>
            <span className={margin_adjust}>14px • Line Height: 24px</span>
          </div>
        </div>
        <div className={font}>
          <div className={font_description}>
            <h1 className={text_adjust}>Detail text</h1>
            <span className={[brown_font1].join(" ")}>The quick brown fox jumps over the lazy dog.</span>
            <span className={margin_adjust}>Proxima Nova - Regular</span>
            <span className={margin_adjust}>12px • Line Height: 24px</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandText

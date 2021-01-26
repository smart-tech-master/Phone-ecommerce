import React from 'react'
import {
  text,
  description,
  photos,
  cards,
  what_is_part,
  see_brand_button,
  download_title
} from './styles/brandstyle.module.scss'
import {
  DOWNLOAD_ICON,
} from 'common/images'

const BrandStyle = () => {
  return (
    <div className={what_is_part}>
      <div className={text}>
        <h1>Brand style<br></br>guidelines.</h1>
        <div className={description}>
          We've created a kit for simple but effective usage of TechSpecs logo and trademark guidelines.
        </div>
        <button className={[see_brand_button, "btn btn-primary"].join(" ")}><img src={DOWNLOAD_ICON} /><span className={download_title}>Download Brand Assets </span></button>
      </div>
      <div className={photos}>
        <div className={cards}></div>
      </div>
    </div>

  )
}

export default BrandStyle
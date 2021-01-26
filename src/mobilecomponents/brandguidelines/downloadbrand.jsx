//@flow

import React from 'react'
import {
  download_part,
  brand_part,
  brand_title,
  see_brand_button,
  download_title
} from './styles/downloadbrand.module.scss'
import {
  DOWNLOAD_ICON
} from 'common/images'

const DownloadBrand = () => {

  return (
    <div className={download_part}>
      <div className={brand_part}>
        <h6 className={brand_title}>Here you can get all our brand assets for video production,press and media usage.Please don't modify it or use for another purpose.</h6>
        <div className={see_brand_button}><img src={DOWNLOAD_ICON} /><span className={download_title}>Download Brand Assets </span></div>
      </div>
    </div >

  )
}

export default DownloadBrand

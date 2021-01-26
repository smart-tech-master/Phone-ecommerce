import React from 'react'
import './styles/brandpic.scss'
import {
  BRAND_PIXEL,
  BRAND_MARK,
  BRAND_DEVICE_FOODINI,
} from 'common/images'

const BrandPicture = () => {

  return (
    <div className="grid-container">
      <div className="pic3">
        <img className="img3" src={BRAND_MARK}></img>
      </div>
      <div className="pic2">
        <img className="img2" src={BRAND_PIXEL}></img>
      </div>
      <div className="pic1">
        <img className="img1" src={BRAND_DEVICE_FOODINI}></img>
      </div>
    </div>
  )
}

export default BrandPicture
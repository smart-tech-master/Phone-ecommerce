import React from 'react'
import {
  brand_mark_part,
  brand_mark_title,
  brand_mark_description
} from './styles/typography.module.scss'
const Typography = () => {

  return (
    <div className={brand_mark_part}>
      <div className={brand_mark_title}>
        <h1>Typography &<br></br>color usage.</h1>
        <div className={brand_mark_description}>
          It’s very important for us to keep the best quality of materials we produce or which are produced under our name. That’s why we are showing the way of our brand mark usage on different types of graphics.
        </div>
      </div>
    </div>
  )
}

export default Typography
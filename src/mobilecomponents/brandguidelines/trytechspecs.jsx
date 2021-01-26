import React from 'react'
import {
  try_part,
  see_brand_button,
  download_title,
  part,
  now_title
} from './styles/trytech.module.scss'
const TryTechSpecs = () => {

  return (
    <div className={try_part}>
      <div className={part}>
        <h1 className={now_title}>Try TechSpecs now.</h1>
        <button className={[see_brand_button, "btn btn-primary"].join(" ")}><span className={download_title}>Start Finding Specs.</span></button>
      </div>

    </div>
  )
}

export default TryTechSpecs
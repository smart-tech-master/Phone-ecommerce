//@flow

import React from 'react'
import { CLOSE_IMG, ICN_IMG } from 'common/images'
import './styles.scss'

type Props = {
  onAboutPopupClose: () => any,
  isAboutPopup: boolean
}
const AboutPopup = (props: Props) => {
  const { onAboutPopupClose, isAboutPopup } = props
  if (!isAboutPopup) {
    return null
  }
  return (
    <div className="pop_tecspec">
      <button onClick={onAboutPopupClose} className="close_pop">
        <img src={CLOSE_IMG} alt="close icon" />
      </button>
      <div className="tec_icn">
        <img src={ICN_IMG} alt="app icon" />
      </div>
      <div className="tec_contnt">
        <h4>Welcome to TechSpecs.</h4>
        <p>
          Use our search engine to find and compare the detailed specs of any
          consumer electronics device in the world.
        </p>
        <button className="try_now">Try now!</button>
      </div>
    </div>
  )
}

export default AboutPopup

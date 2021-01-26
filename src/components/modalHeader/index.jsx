//@flow

import React from 'react'
import './styles.scss'
import { SUGGEST_IMG, SHARE_IMG } from 'common/images'
import StarRatings from 'react-star-ratings'
type Props = {
  onArrowClick: () => any,
  isArrowClicked: boolean,
  deviceName: string,
  onShareClick: () => any,
  isVisibleMenubar: boolean
}

const ModalHeader = (props: Props) => {
  const { onArrowClick, isArrowClicked, deviceName, onShareClick, isVisibleMenubar } = props
  return (
    <div className="iphn-hed">
      <div className="wrap_radio">
        <span className="device-name">{deviceName}</span>

        <div className="sug_share">
          <div className="suggest_part">
            <img src={SUGGEST_IMG} />
            <b className="suggest_title">Suggest Edit</b>
          </div>

          <div className="share_part">
            <img src={SHARE_IMG} onClick={onShareClick} />
            <b className="share_title">Share</b>
          </div>

        </div>
      </div>
      {
        isVisibleMenubar && (
          <div>
            <StarRatings
              rating={4.5}
              starRatedColor="rgb(3, 169, 244)"
              numberOfStars={5}
              name='rating'
              svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
              svgIconViewBox='7 7 30 30'
              starHoverColor="rgb(3, 169, 244)"
              starDimension="30"
              starSpacing="0px"
            />
            <span>Based on <b>32</b> reviews.</span>
          </div>
        )
      }
      <div className="click_drp" onClick={onArrowClick}>
        <span className="iphn-swt">
          <i
            className={isArrowClicked ? 'fa fa-angle-up' : 'fa fa-angle-down'}
            aria-hidden="true"
          ></i>
        </span>
      </div>
    </div>
  )
}
export default ModalHeader

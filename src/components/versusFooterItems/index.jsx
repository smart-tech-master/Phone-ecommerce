//@flow

import React, { Fragment } from 'react'
import './styles.scss'

type Props = {
  versusFooterData: Array<Object>
}
const VersusFooterItems = (props: Props) => {
  const { versusFooterData } = props
  return (
    <div className="wrap_slide">
      <div className="vs-rgt">
        {versusFooterData.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="vsbt-cont">
                <div className="vsbt-img">
                  <img src={item.productImg} alt="" />
                </div>
                <div className="vsbt-para">
                  <p>{item.productBrand}</p>
                  <h3>{item.product}</h3>
                </div>
              </div>
              {index !== versusFooterData.length - 1 && (
                <div className="vs-text">vs</div>
              )}
            </Fragment>
          )
        })}
      </div>
      <div className="slideshow_row">
        <span className="slide_platfrom">
          <span className="slide_toggle">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </div>
    </div>
  )
}

export default VersusFooterItems

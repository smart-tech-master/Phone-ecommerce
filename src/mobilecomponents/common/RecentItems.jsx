//@flow

import React from 'react'

import './styles.scss'

type Props = {
  recentItems: Array<Object>
}
const RecentItems = (props: Props) => {
  const { recentItems } = props
  return (
    <div className="drp-card">
      <div className="drp-licn">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <b>33</b> recent items found.
      </div>
      {recentItems.map((item, i) => {
        return (
          <div className="drp-crd" key={i}>
            <div className="vsbt-cont">
              <div className="vsbt-img">
                <img src={item.productImg} alt="" />
              </div>
              <div className="vsbt-para">
                <h3>{item.productName}</h3>
                <p>{item.aboutProduct}</p>
              </div>
            </div>
            <span>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default RecentItems

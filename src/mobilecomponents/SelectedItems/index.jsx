//@flow

import React from 'react'

import './styles.scss'

type Props = {
  addedItems: Array<Object>,
  onVSButtonClick: () => any
}

const SelectedItems = (props: Props) => {
  const { onVSButtonClick, addedItems } = props
  return (
    <div className="tick-drp">
      <div className="tick-cont">
        <b>1 Items</b> added <span>Remove All</span>
      </div>
      <div className="d-fex">
        {addedItems.map((item, index) => {
          return (
            <div className="vsbt-cont" key={index}>
              <span className="vs-minus">
                <i className="fa fa-minus" aria-hidden="true"></i>
              </span>
              <div className="vsbt-img">
                <img src={item.productImg} alt="" />
              </div>
              <div className="vsbt-para">
                <h3>{item.productBrand}</h3>
                <p>{item.product}</p>
              </div>
            </div>
          )
        })}
      </div>
      <button type="button" onClick={onVSButtonClick}>
        VS
      </button>
    </div>
  )
}

export default SelectedItems

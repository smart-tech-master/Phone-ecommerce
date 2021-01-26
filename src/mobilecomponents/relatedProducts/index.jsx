//@flow

import React from 'react'
import './styles.scss'

import { MOBILE_IMG1 } from 'common/images'

type RelatedProductsType = { productName: string, version: string }

type Props = {
  relatedProductsData: Array<RelatedProductsType>
}

const RelatedProducts = (props: Props) => {
  const { relatedProductsData } = props
  return (
    <div className="ipn-rp">
      <p>Related Products</p>
      <div className="ipn-box">
        {relatedProductsData.map((data, index) => {
          return (
            <div className="vsbt-cont ipn-cont" key={index}>
              <div className="vsbt-img">
                <img src={MOBILE_IMG1} alt="related-product" />
              </div>
              <div className="vsbt-para">
                <p>{data.productName}</p>
                <h3>{data.version}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProducts

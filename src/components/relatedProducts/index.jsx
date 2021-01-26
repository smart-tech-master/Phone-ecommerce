//@flow

import React from 'react'
import './styles.scss'

import { MOBILE_IMG1 } from 'common/images'

type RelatedProductsType = { productName: string, version: string }

type Props = {
  relatedProductsData: Array<Object>
}

const RelatedProducts = (props: Props) => {
  const { relatedProductsData } = props
  const relatedProducts = Object.keys(relatedProductsData).length
    ? relatedProductsData.relatedProducts.result
    : []
  console.log(relatedProducts)
  return relatedProducts ? (
    <div className="ipn-rp">
      <p>Related Products</p>
      <div className="ipn-box">
        {relatedProducts.map((data, index) => {
          return (
            <div className="vsbt-cont ipn-cont" key={index}>
              <div className="vsbt-img">
                <img src={data.featured_image.thumb || MOBILE_IMG1} alt="related-product" />
              </div>
              <div className="vsbt-para">
                <p>{data.v_brand_name}</p>
                <h3>{data.device_name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  ) : null
}

export default RelatedProducts

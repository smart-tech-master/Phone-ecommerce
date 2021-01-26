//@flow

import * as React from 'react'
import { PHONE_IMG } from 'common/images'
import './styles.scss'

type Props = {
  onClick: (item: Object) => any,
  item: {
    productImg: string,
    aboutProduct: string,
    productName: string
  },
  itemRowClass?: string,
  itemRowLeftClass?: string,
  productImageClass?: string,
  productContent?: string,
  children: React.Node
}

const ShortedProduct = (props: Props) => {
  const {
    item,
    itemRowClass,
    itemRowLeftClass,
    productImageClass,
    productContent,
    children,
    onClick
  } = props
  const { productName, productImg, aboutProduct } = item
  return (
    <div className={itemRowClass || 'item_row'} onClick={onClick}>
      <div className={itemRowLeftClass || 'item_row_lft'}>
        <center>
          <div className={productImageClass || 'mobile_icn'}>
            <img src={productImg || PHONE_IMG} alt="product" />
          </div>
        </center>
        <div className={productContent || 'mobile_contnt'}>
          <h4>{productName}</h4>
          <p>{aboutProduct}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default ShortedProduct

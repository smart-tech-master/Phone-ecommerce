//@flow

import React from 'react'
import ShortedProduct from 'components/shortedProduct'
import Selector from 'components/common/Selector'
import Selector1 from 'components/common/Selector1'
import AdvancedSearchButton from 'components/common/AdvancedSearchButton'

import {
  // shortedProduct,
  phoneTypeFilter,
  phoneBrandFilter
} from 'utils/metaData'
import './styles.scss'

type Props = {
  deviceByName: Object,
  categories: Object,
  brands: Object,
  onShortedProductClick: (val: any) => any,
  onAdvanceSearhClick: (val: any) => any,
  onProductDetails: (Object: any) => any,
  cbfilteredProducts: Object
}
const ComparativeProductViewer = (props: Props) => {
  const {
    onShortedProductClick,
    onAdvanceSearhClick,
    deviceByName,
    categories,
    onProductDetails,
    brands,
    cbfilteredProducts
  } = props

  const devices = Object.keys(deviceByName).length
    ? deviceByName.deviceByName.result
    : []
  const cbfilters = typeof cbfilteredProducts.cbfilterProducts !== 'undefined' && typeof cbfilteredProducts.cbfilterProducts.result !== 'undefined' ? cbfilteredProducts.cbfilterProducts.result : []
  // const cbfilterd =typeof cbfilteredProducts.cbfilteredProducts.result.
  console.log("dfsdfsdfsdfyhoweurowjfdnv")
  console.log(cbfilters)
  console.log(devices)
  return devices ? (
    <div className="comparission_dropdown">
      <div className="drop_row">
        <div className="drop_lft">

          <Selector optionList1={categories} />
          <Selector1 optionList={brands} />
        </div>
        <AdvancedSearchButton onClick={onAdvanceSearhClick} />
      </div>
      {

        cbfilters.length > 0 ?
          <div className="cbfiltersitems">
            {
              cbfilters.map((item, index) => {
                const itemObj = {
                  productImg: item.featured_image.thumb,
                  aboutProduct: item.v_brand_name,
                  productName: item.device_name
                }
                return (
                  <ShortedProduct
                    key={index}
                    onClick={() => onProductDetails(item)}
                    item={itemObj}
                  >
                    <div className="item_row_rgt">
                      <button type="button" onClick={() => onProductDetails(item)}>
                        See Specs <i className="fa fa-angle-right" aria-hidden="true" />
                      </button>
                    </div>
                  </ShortedProduct>
                )
              })
            }
          </div> : <div className="devicenameitems">
            {
              devices.map((item, index) => {
                const itemObj = {
                  productImg: item.featured_image.thumb,
                  aboutProduct: item.v_brand_name,
                  productName: item.device_name
                }
                return (
                  <ShortedProduct
                    key={index}
                    onClick={() => onProductDetails(item)}
                    item={itemObj}
                  >
                    <div className="item_row_rgt">
                      <button type="button" onClick={() => onProductDetails(item)}>
                        See Specs <i className="fa fa-angle-right" aria-hidden="true" />
                      </button>
                    </div>
                  </ShortedProduct>
                )
              })
            }
          </div>


      }
    </div>
  ) : null

}
export default ComparativeProductViewer

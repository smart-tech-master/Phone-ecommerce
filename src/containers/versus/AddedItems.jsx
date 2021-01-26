//@flow

import React, { Component, Fragment } from 'react'
import { MOBILE_IMG2 } from 'common/images'
import TableRow from 'components/common/TableRow'
import { PHONE_IMG, TV_IMG, STV_IMG, GOLD_PHONE, ICON_SLIDER_ARROWS } from 'common/images'
import Button from 'components/common/buttonComponent/ButtonComponent'
import './styles.scss'
import {
  breadCrumbData,
  recentProduct,
  // versusFooterData,
  productDescription,
  productColors,
  productDisplayDescriptionmodel,
  filterButtonList,
  addedItems,
  shortedProduct
} from 'utils/metaData'


type Props = {

  productDisplayDescription: Object,
  onCloseItem: (val: any) => any,
  multiProductsState: Array<Object>,
  isAddButtonClicked: boolean,
  onAddItem: () => any,
  onSearchModal: () => any,
  onRecentItems: () => any,
}

const AddedItems = (props: Props) => {

  const {
    productDisplayDescription,
    onCloseItem,
    multiProductsState,
    isAddButtonClicked,
    onAddItem,
    onSearchModal,
    onRecentItems,
  } = props
  const products = Object.keys(productDisplayDescription.multivsProducts).length
    ? productDisplayDescription.multivsProducts
    : [];
  if (products.length == 0 || products[products.length - 1].result !== "search") {
    products.push({ result: "search" });
  }
  console.log(products)
  return multiProductsState ? (
    <div className="vs_lists">
      {
        products.map((item, index) => {
          return (
            item.result != "search" ?
              < Fragment key={index}>
                <div className="vscol-2 vs2_box back_color">
                  <span className="vs-minus">
                    <i className="fa fa-minus pointer" aria-hidden="true" onClick={() => onCloseItem(item)}></i>
                  </span>
                  <div className="box-img">
                    <div className="vsbt-img">
                      <img src={typeof item.result.images !== 'undefined' && typeof item.result.images[0] !=='undefined' ? item.result.images[0].name.thumb : MOBILE_IMG2} alt="" />
                    </div>
                    <div className="vsbt-para">
                      <p>{typeof item.result.name != "undefined" ? item.result.name : "Samsung"}</p>
                    </div>
                  </div>
                  <table className="iphn-table box_tbl">
                    <tbody>
                      <tr className="iphn-row">
                        <th className="iphn-hdg">Design</th>
                      </tr>

                      {
                        item.result.specification.Body &&
                        Object.keys(item.result.specification.Body).map((data, i) => data !== "Colors" ? (
                          <TableRow
                            key={i}
                            rowStyle="iphn-row"
                            colPropertyStyle="iphn-col col-grey"
                            colValueStyle="iphn-col"
                            property={data}
                            value={item.result.specification.Body[data].value}
                          />
                        ) : null
                        )
                      }
                      <tr className="iphn-row flex_column">
                        <td className="iphn-col col-grey">Color</td>
                        <td className="iphn-col iphn-flex">
                          {item.result.specification.Body.Colors.value &&
                            productColors.map((item1, i) => {
                              return (
                                <div className="iphnimg-col" key={i}>
                                  <div className="compare">
                                    <img src={PHONE_IMG} alt="" />
                                  </div>
                                  <div className="custm_radio">
                                    <input
                                      type="radio"
                                      id={i}
                                      name="radio-group"
                                    />
                                    <label htmlFor={i}>{item1.color_name}</label>
                                  </div>
                                </div>
                              )
                            })}
                        </td>
                      </tr>
                      <tr className="iphn-row">
                        <th className="iphn-hdg">Display</th>
                      </tr>
                      {item.result.specification.Display &&
                        Object.keys(item.result.specification.Display).map((data, i) => {
                          return (
                            <TableRow
                              key={i}
                              rowStyle="iphn-row"
                              colPropertyStyle="iphn-col col-grey"
                              colValueStyle="iphn-col padd_lft"
                              property={data}
                              value={item.result.specification.Display[data].value}
                            />
                          )
                        })}
                    </tbody>
                  </table>
                </div>
              </Fragment>
              :
              <div className="vscol-2" key="vsitemsearch">
                <div className="vs2-cont drp-crs">
                  <div className="vs-plus ">
                    {!isAddButtonClicked && (
                      <Button onClick={onAddItem} className="cstm_plus bg_blue">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </Button>
                    )}
                    {isAddButtonClicked && (
                      <Button onClick={onAddItem} className="cstm_plus">
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </Button>
                    )}
                  </div>
                  <p className="start">Start comparing by adding products.</p>
                  {isAddButtonClicked && (

                    < div className="vs-src animated zoomIn">
                      <span className="span1 ">
                        <Button onClick={onSearchModal} className="search" dataToggel="modal" dataTarget="#myModal">
                          <i className="fa fa-search" aria-hidden="true"></i>
                          Search
                    </Button>
                      </span>
                      <span className="span2">
                        <Button onClick={onRecentItems} className="search" dataToggel="modal" dataTarget="#myModal">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                          Recent
                    </Button>
                      </span>
                    </div>
                  )}
                  {/* {isRecentItemVisible && isAddButtonClicked && (
              <RecentItems recentItems={recentProduct} />

              )} */}
                </div>
              </div>
          )
        })

      }

    </div>
  ) : null
}

export default AddedItems

//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from 'components/header'
import BreadCrum1 from 'components/breadCrum1'
import VersusSidebar from 'components/versusSidebar'
import VersusFooterItems from 'components/versusFooterItems'
import RecentItems from 'components/common/RecentItems'
import Button from 'components/common/buttonComponent/ButtonComponent'
import Modal from 'components/common/Modal'
import InputSearchBar from 'components/inputSearchBar'
import ShortedProduct from 'components/shortedProduct'
import SelectedItem from 'components/SelectedItems'
import BannerProduction from 'components/bannerproduction'
import SearchProductionModal from 'components/searchvsproduction'
import {
  breadCrumbData,
  recentProduct,
  // versusFooterData,
  productDescription,
  productColors,
  productDisplayDescription,
  filterButtonList,
  addedItems,
  shortedProduct
} from 'utils/metaData'
import AddedItems from './AddedItems'

import './styles.scss'
import { SEARCH_IMG } from 'common/images'
import { GET_VS_FOOTER_PRODUCTS, GET_DETAIL_PRODUCTION } from 'common/constants'
import { addItem, removeItem, resetItem } from "common/action"



type Props = {
  dispatch: ({ type: string, payload: any }) => any,
  onFeedBackClick: () => any,
  onBreadCrumClick: () => any,
  activeFilter: string,
  isAddButtonClicked: boolean,
  onAddItem: () => any,
  onSearchModal: () => any,
  onRecentItems: () => any,
  isRecentItemVisible: boolean,
  onCloseModal: () => any,
  onShortedProductClick: (val: any) => any,
  onFilterButton: (item: string) => any,
  isModalOpen: boolean,
  onVSButtonClick: (value1: string, value2: string) => any,
  onTextChange: (item: any) => any,
  isVSitemChecked: boolean,
  totalItems: Array<Object>,
  footerProducts: Object,
  multiProducts: Array<Object>,
  additems: Object,
  isBanner: boolean

}

type State = {
  multiProductsState: Array<Object>,
  isVSitemChecked: boolean,
}

class VersusView extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      footerProducts: {},
      multiProductsState: [],
      isVSitemChecked: false
    }

    props.dispatch({
      type: 'GET_VS_FOOTER_PRODUCTS',
      payload: { url: GET_VS_FOOTER_PRODUCTS }
    })


  }

  onCloseItem = (Objectitem) => {

    this.props.dispatch({
      type: 'REMOVE_ITEM',
      payload: removeItem(Objectitem.result.product_id)
    })

  }


  onVSButtonClick = (itemid1, itemid2) => {

    console.log(itemid1 + "," + itemid2)
    var product_id = itemid1 + "," + itemid2
    console.log(product_id)
    this.props.dispatch({
      type: 'GET_VS_MULTI_PRODUCTS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: product_id, status: 2 }
    })
    this.setState({ isVSitemChecked: true })
  }
  render() {
    const { multiProductsState, isVSitemChecked } = this.state
    const {
      onFeedBackClick,
      onBreadCrumClick,
      activeFilter,
      isAddButtonClicked,
      onAddItem,
      onSearchModal,
      onRecentItems,
      isRecentItemVisible,
      onCloseModal,
      onShortedProductClick,
      onFilterButton,
      isModalOpen,
      onVSButtonClick,
      onTextChange,
      totalItems,
      footerProducts,
      multiProducts,
      additems,
      isBanner
    } = this.props


    console.log(multiProducts)
    return (
      <div className="wrapper">
        <Header onFeedBackClick={onFeedBackClick} headerClass="header-wrapper" feedbackButton="feedback-style" />
        <BreadCrum1 breadCrumbData={breadCrumbData} onClick={onBreadCrumClick} />
        <section>
          <div className="vs-box">
            <VersusSidebar />
            <div className="vs-main">
              <div className={isBanner ? "vs-lft d_flex vs_banner_disable" : "vs-lft d_flex"}>
                {
                  // isVSitemChecked && (
                  <AddedItems
                    productDisplayDescription={multiProducts}
                    onCloseItem={this.onCloseItem}
                    multiProductsState={multiProductsState}
                    isAddButtonClicked={isAddButtonClicked}
                    onAddItem={onAddItem}
                    onSearchModal={onSearchModal}
                    onRecentItems={onRecentItems}
                  />
                  // )
                }

              </div>

              {/*
                 <VersusFooterItems versusFooterData={versusFooterData} /> */}
              <BannerProduction footerProducts={footerProducts} onVSButtonClick={this.onVSButtonClick} />
            </div>
          </div>

        </section>

        {
          isModalOpen && (
            <SearchProductionModal onCloseModal={onCloseModal} onVSButtonClick={onVSButtonClick} />
          )

        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    additems: state.additems,
    footerProducts: state.vsFooterProducts.vsFooterProducts.result,
    multiProducts: state.multivsProducts
  }
}
export default connect(mapStateToProps)(VersusView)
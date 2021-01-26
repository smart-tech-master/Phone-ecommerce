//@flow

import React, { Component } from 'react'
import VersusView from './VersusView'
import { connect } from 'react-redux'
import { addItem, removeItem, resetItem } from "common/action"
import { SEARCH_BY_NAME, GET_TRENDING_PRODUCTS, GET_CATEGORIES_PRODUCTS, GET_BRANDS, GET_DETAIL_PRODUCTION } from 'common/constants'

type State = {
  activeFilter: string,
  isRecentItemVisible: boolean,
  isAddButtonClicked: boolean,
  isModalOpen: boolean,
  isSearchItemVisible: boolean,
  isVSitemChecked: boolean,
  totalItems: Array<Object>,
  newItmes: Array<Object>,
  isBanner: boolean
}
type Props = {

  dispatch: ({ type: string, payload: any }) => any,
  additems: Array<Object>,
  multiProducts: Array<Object>,
}

class Versus extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeFilter: 'Iphone X',
      isRecentItemVisible: false,
      isAddButtonClicked: false,
      isModalOpen: false,
      isVSitemChecked: false,
      totalItems: [],
      newItmes: [],
      isBanner: false

    }

    document.body.id = "versus-page"

  }
  componentWillReceiveProps(nextProps) {


    console.log(nextProps)

    // if (nextProps.multivsProducts.multivsProducts !== this.props.multiProducts.multivsProducts) {

    //   console.log(nextProps.multivsProducts.multivsProducts)
    //   this.setState({ newItmes: nextProps.multivsProducts.multivsProducts })
    // }


  }
  onRecentItems = () => {
    this.setState({ isRecentItemVisible: true })
  }
  onSearchModal = () => {
    this.setState({ isModalOpen: true })
    this.setState({ isAddButtonClicked: !this.state.isAddButtonClicked })
  }

  onAddItem = () => {
    this.setState({ isAddButtonClicked: !this.state.isAddButtonClicked })
  }
  onFilterButton = (item: string) => {
    this.setState({ activeFilter: item })
  }

  onShortedProductClick = () => { }

  onFeedBackClick = () => { }

  onBreadCrumClick = () => { }

  onCloseModal = () => {
    this.props.dispatch({
      type: 'RESET_ITEM',
      payload: resetItem("reset")
    })
    this.setState({ isModalOpen: false })
  }
  onCloseItem = () => {

    console.log("close")
  }
  onVSButtonClick = () => {


    var product_id = []
    this.props.additems.map((item, index) => {
      product_id.push(item.productId);
    })

    console.log(product_id)
    this.props.dispatch({
      type: 'GET_VS_MULTI_PRODUCTS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: product_id.join(','), status: 2 }
    })

    this.props.dispatch({
      type: 'RESET_ITEM',
      payload: resetItem("reset")
    })

    this.setState({ isVSitemChecked: true, isModalOpen: false })
    this.setState({ isBanner: true })
  }

  onTextChange = (input: string) => { }

  render() {
    const { multiProducts, additems } = this.props
    const {
      isRecentItemVisible,
      isAddButtonClicked,
      activeFilter,
      isModalOpen,
      isVSitemChecked,
      totalItems,
      isBanner
    } = this.state

    return (
      <VersusView
        onFeedBackClick={this.onFeedBackClick}
        onBreadCrumClick={this.onBreadCrumClick}
        activeFilter={activeFilter}
        isAddButtonClicked={isAddButtonClicked}
        onAddItem={this.onAddItem}
        onSearchModal={this.onSearchModal}
        onRecentItems={this.onRecentItems}
        isRecentItemVisible={isRecentItemVisible}
        onCloseModal={this.onCloseModal}
        onShortedProductClick={this.onShortedProductClick}
        onFilterButton={this.onFilterButton}
        isModalOpen={isModalOpen}
        onVSButtonClick={this.onVSButtonClick}
        onTextChange={e => this.onTextChange(e.target.value)}
        isVSitemChecked={isVSitemChecked}
        totalItems={totalItems}
        onCloseItem={this.onCloseItem}
        isBanner={isBanner}
      />
    )
  }
}
const mapStateToProps = state => {

  return {
    additems: state.additems.additems,
    multiProducts: state.multivsProducts
  }
}
export default connect(mapStateToProps)(Versus)

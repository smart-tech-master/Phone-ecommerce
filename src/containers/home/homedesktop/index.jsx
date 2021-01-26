//@flow

import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'components/header'
import { debounce } from 'lodash'
import InputSearchBar from 'components/inputSearchBar'
import ComparativeProductViewer from './ComparativeProductViewer.jsx'
import TrendingListSection from './TrendingListSection'
import ProductDescriptionModal from './ProductDescriptionModal'
import ReferenceApps from 'components/referenceApps/index'
import AboutPopup from 'components/aboutPopup'
import {
  filterButtonList,
  sideBarMenu,
  sideBarMenu1,
  sideBarMenu2,
  sideBarMenu3,
  socialApp,
  relatedProducts,
  tabList,
  tabPane,
  productDetailMenu1,
  productDetailMenu2
} from 'utils/metaData'
import '../homedesktop/styles.scss'
import Search from 'components/search/Search.jsx'
import {
  SEARCH_BY_NAME,
  GET_TRENDING_PRODUCTS,
  GET_CATEGORIES_PRODUCTS,
  GET_BRANDS,
  GET_DETAIL_PRODUCTION,
  GET_RELATED_PRODUCTS,
} from 'common/constants'
import { trendingProductType } from 'common/types'
import { allVersionType } from 'common/types'



type Props = {
  history: {
    push: (path: string) => any
  },
  dispatch: ({ type: string, payload: any }) => any,
  deviceByName: Array<Object>,
  categories: Array<Object>,
  brands: Array<Object>,
  versionDetailState: Object,
  trendingProducts: Array<trendingProductType>,
  smartPhoneDetails: Object,
  relatedProductsToDevice: Array<Object>,
  cbfilterProducts: Object
}

type State = {
  activeFilter: string,
  isAboutPopup: boolean,
  activeTab: string,
  versionID: string,
  productID: string,
  isDescModalVisible: boolean,
  isSeeSpecModalVisible: boolean,
  productName: string,
  isArrowClicked: boolean,
  currentToolTip: string,
  isSuggestProductVisible: boolean,
  is_mic_show: boolean,
  productDetailItem: Object,
  sidebar: Array<Object>,
  isDropVisible: boolean,
  attributeItems: Array<string>,
  isSocialShareModal: boolean,
  isSocialCheck: boolean,
  backpart: boolean,
  backcheck: boolean,
  linkpart: boolean,
  linkcheck: boolean,
  embeddedpart: boolean,
  embeddedcheck: boolean,
  categoryID: string,
  AllversionDetail: Object,
  tempDetail: Object,
  loading: boolean,
  isCloseAboutPop: boolean,
  deviceID: boolean,
  isVisibleMenubar: boolean

}

class DeskTopHome extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeFilter: 'Iphone X',
      isAboutPopup: true,
      activeTab: 'A1865',
      versionID: '',
      productID: '',
      categoryID: '',
      isDescModalVisible: false,
      isSeeSpecModalVisible: false,
      isSuggestProductVisible: false,
      is_mic_show: true,
      productName: '',
      currentToolTip: '',
      isArrowClicked: false,
      sidebar: sideBarMenu,
      productDetailItem: {},
      isDropVisible: false,
      attributeItems: [],
      closebutton: false,
      isSocialShareModal: true,
      isSocialCheck: true,
      AllversionDetail: {},
      loading: true,
      linkpart: false,
      linkcheck: true,
      backpart: false,
      backcheck: true,
      embeddedpart: true,
      embeddedcheck: true,
      isCloseAboutPop: false,
      deviceID: '',
      isVisibleMenubar: false
    }
    // document.body.style.overflow = "scroll";
    document.body.id = "home-page";
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.convertToversionDetail1 = this.convertToversionDetail1.bind(this)
    props.dispatch({
      type: 'GET_TRENDING_PRODUCTS',
      payload: { url: GET_TRENDING_PRODUCTS }
    })

    props.dispatch({
      type: 'GET_CATEGORIES',
      payload: { url: GET_CATEGORIES_PRODUCTS }
    })

    props.dispatch({
      type: 'GET_BRANDS',
      payload: { url: GET_BRANDS }
    })
  }

  onFilterButtonClick = (activeFilter: string) => {
    this.setState({ activeFilter: activeFilter })
    //this.setState({productName:activeFilter})
    if (activeFilter != '') {
      document.getElementById("search_input").value = activeFilter
      this.props.dispatch({
        type: 'GET_DEVICE_BY_NAME',
        payload: { url: SEARCH_BY_NAME, name: activeFilter }
      })
    } else {
      this.props.dispatch({
        type: 'RESET',
        payload: { type: 'GET_DEVICE_BY_NAME_RESET' }
      })
    }
  }

  onShortedProductClick = () => {
    this.setState({ isDescModalVisible: true });
    this.setState({ isAboutPopup: false });
  }

  onAdvanceSearhClick = () => { }

  onTrendingProductBtnClick = (device_id: string, category: string) => {
    console.log(category)
    this.setState({ categoryID: category })
    this.setState({ deviceID: device_id })
    this.props.dispatch({
      type: 'GET_SMARTPHONE_DETAILS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: device_id, status: 1 }
    })
    this.setState({ isDescModalVisible: true, loading: false })
    this.setState({ isAboutPopup: false });
  }

  onModalOuterClick = () => {
    this.setState({ isDescModalVisible: false, categoryID: '' })
    this.setState({ isAboutPopup: true });
    this.setState({ isVisibleMenubar: false })
  }

  onAboutPopupClose = () => {
    this.setState({ isAboutPopup: false })
    this.setState({ isCloseAboutPop: true })
  }

  onHideTrending = () => {
    this.setState({ isDropVisible: false })
  }
  onVisibleTrending = () => {
    this.setState({ isDropVisible: true })
  }

  onFeedBackClick = () => { }

  onProductTabChange = (
    versionID: string,
    activeTab: string,
    productID: string
  ) => {
    this.setState({ activeTab: activeTab })
    this.props.dispatch({
      type: 'GET_VERSION_SPECIALFICATION',
      payload: {
        url: GET_DETAIL_PRODUCTION,
        productId: productID,
        status: 1,
        versionId: versionID
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.smartPhoneDetails.smartPhoneDetails !==
      this.props.smartPhoneDetails.smartPhoneDetails
    ) {
      let activeTTab =
        typeof nextProps.smartPhoneDetails.smartPhoneDetails.result.version !== 'undefined' && nextProps.smartPhoneDetails.smartPhoneDetails.result.version.length > 0
          ? nextProps.smartPhoneDetails.smartPhoneDetails.result.version[0]
            .version_name : ""

      this.setState({ activeTab: activeTTab })
    }
  }
  onMobileColorSelect = event => { }

  onProductColorSelect = (event: SyntheticEvent<HTMLButtonElement>) => { }

  onProductDetails = (item: Object) => {
    const { dispatch } = this.props
    this.setState({ deviceID: item.device_id })
    dispatch({
      type: 'GET_SMARTPHONE_DETAILS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: item.device_id, status: 1 }
    })
    this.setState({
      isDescModalVisible: true,
      productDetailItem: item,
      categoryID: item.category_id
    })
    this.setState({ isAboutPopup: false });
  }

  onReferenceAppClick = () => {
    this.props.history.push('/app/versus')
  }

  onExploreAppClick = () => {
    this.props.history.push('/app/explore')
  }

  getProductByName = debounce(productName => {
    const { dispatch } = this.props
    this.setState({ productName: productName })
    //console.log(this.state.productName)

    if (productName != '') {
      this.setState({ isSuggestProductVisible: true, is_mic_show: false })
      dispatch({
        type: 'GET_DEVICE_BY_NAME',
        payload: { url: SEARCH_BY_NAME, name: productName }
      })

      dispatch({
        type: 'RESET',
        payload: { type: 'GET_CB_FILTER_PRODUCTS_RESET' }
      })
      var element = document.getElementsByName("category_select");
      console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
      if (element.length > 0) {
        element[0].value = "";
      }
      console.log(element);

    } else {
      this.setState({ isSuggestProductVisible: false, is_mic_show: true })
      dispatch({
        type: 'RESET',
        payload: { type: 'GET_DEVICE_BY_NAME_RESET' }
      })
    }
  }, 200)

  clearSearchkeyword = () => {
    this.setState({ isSuggestProductVisible: false })
  }

  onTrendingMouseOver = currentToolTip => {
    this.setState({ currentToolTip })
  }

  onArrowClick = () => {
    if (this.state.categoryID !== '') {
      this.props.dispatch({
        type: 'GET_RELATED_PRODUCTS',
        payload: {
          url: GET_RELATED_PRODUCTS,
          categoryID: this.state.categoryID
        }
      })

      this.setState({ isArrowClicked: !this.state.isArrowClicked })
    }
  }

  callbackHome = data => {
    if (data === 0) {
      this.setState({ sidebar: sideBarMenu })
    }
    if (data === 1) {
      this.setState({ sidebar: sideBarMenu1 })
    }
    if (data === 2) {
      this.setState({ sidebar: sideBarMenu2 })
    }
    if (data === 3) {
      this.setState({ sidebar: sideBarMenu3 })
    }
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      e.target.value = ''
      this.getProductByName('')
    }
  }
  componentWillMount() {
    document.addEventListener('click', this.handleOutsideClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false)
  }
  onShareClick = () => {

    if (this.state.isSocialCheck) {

      this.setState({ isSocialShareModal: false })
      this.setState({ isSocialCheck: false })

    }
    else {
      this.setState({ isSocialShareModal: true })
      this.setState({ isSocialCheck: true })

    }

  }

  handleOutsideClick(event) {
    console.log(event)
    // this.setState({ isSocialShareModal: false })
  }

  convertToversionDetail1 = (value1, value2) => {
    var temp = {}
    if (value1 !== [] && value2 !== {}) {
      value1.map((item, index) => {
        if (index == 0) {
          temp[item.version_name] = value2
        } else {
          temp[item.version_name] = {}
        }
      })

    }
  }

  onVisibleMenubarClick = () => {
    this.setState({ isVisibleMenubar: true })
  }

  onFBClick = () => {

  }

  onTwitterClick = () => {

  }
  onVsItemClick = () => {
    console.log(this.state.deviceID)
    this.props.dispatch({
      type: 'GET_VS_MULTI_PRODUCTS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: this.state.deviceID, status: 2 }
    })
    this.props.history.push('/app/versus')
  }
  onLinkClick = () => {

    this.setState({ linkpart: true })
    this.setState({ backpart: true })
    this.setState({ embeddedpart: true })

  }
  onEmbeddedClick = () => {
    this.setState({ embeddedpart: false })
    this.setState({ backpart: true })
    this.setState({ linkpart: false })
  }
  onAllBackClick = () => {
    this.setState({ linkpart: false })
    this.setState({ embeddedpart: true })
    this.setState({ backpart: false })
  }

  render() {
    const {
      activeFilter,
      isAboutPopup,
      isDescModalVisible,
      isSuggestProductVisible,
      is_mic_show,
      productName,
      currentToolTip,
      isArrowClicked,
      productDetailItem,
      activeTab,
      isDropVisible,
      attributeItems,
      closebutton,
      isSocialShareModal,
      categoryID,
      isCloseAboutPop,
      isVisibleMenubar
    } = this.state
    const {
      trendingProducts,
      deviceByName,
      categories,
      brands,
      smartPhoneDetails,
      versionDetailState,
      cbfilterProducts,
      relatedProductsToDevice,

    } = this.props

    console.log(cbfilterProducts)

    return (
      <div className="wrapper test">
        <Header onFeedBackClick={this.onFeedBackClick} />
        <div className="techspec-cont">
          <div className="container cstm-container">
            <InputSearchBar
              labelClassName="blu-ipn"
              label="I want to find"
              activeFilter={activeFilter}
              filterButtonList={deviceByName}
              onFilterButtonClick={this.onFilterButtonClick}
              techClass="tech-ipt"
              techContentClass="tech-cont"
              deviceByName={deviceByName}
              isSuggestProductVisible={isSuggestProductVisible}
              tagRowClass="pos-relative"

              placeholder="iPhone X"
              defaultValue={productName}
              is_mic_show={is_mic_show}
              onValueChange={e => this.getProductByName(e.target.value)}
              handleKeyDown={this.handleKeyDown}
            >
              <Search
                placeholder="iPhone X"
                defaultValue={productName}
                is_mic_show={is_mic_show}
                onValueChange={e => this.getProductByName(e.target.value)}
                handleKeyDown={this.handleKeyDown}
              />
            </InputSearchBar>

            <ComparativeProductViewer
              deviceByName={deviceByName}
              cbfilteredProducts={cbfilterProducts}
              categories={categories}
              brands={brands}
              onShortedProductClick={this.onShortedProductClick}
              onAdvanceSearhClick={this.onAdvanceSearhClick}
              onProductDetails={this.onProductDetails}
            />
            {trendingProducts && (
              <TrendingListSection
                currentToolTip={currentToolTip}
                onMouseOver={this.onTrendingMouseOver}
                trendingProducts={trendingProducts}
                isDropVisible={isDropVisible}
                onTrendingProductBtnClick={this.onTrendingProductBtnClick}
                onHideTrending={this.onHideTrending}
                onVisibleTrending={this.onVisibleTrending}
              />
            )}
            <ReferenceApps
              onReferenceAppClick={this.onReferenceAppClick}
              onExploreAppClick={this.onExploreAppClick}
            />
          </div>

          <AboutPopup
            onAboutPopupClose={this.onAboutPopupClose}
            isAboutPopup={isAboutPopup}
            isCloseAboutPop={isCloseAboutPop}
          />
        </div>

        {/* Product Description Modal */}
        {/* {isDescModalVisible && ( */}
        <ProductDescriptionModal
          {...this.state}
          onModalOuterClick={this.onModalOuterClick}
          sideBarMenu={this.state.sidebar}
          isDescModalVisible={isDescModalVisible}
          socialApp={socialApp}
          relatedProductsData={relatedProductsToDevice}
          tabList={tabList}
          tabPane={tabPane}
          productDetailMenu1={productDetailMenu1}
          productDetailMenu2={productDetailMenu2}
          productDetailItem={smartPhoneDetails}
          onProductTabChange={this.onProductTabChange}
          onProductColorSelect={this.onProductColorSelect}
          onAdvanceSearhClick={this.onAdvanceSearhClick}
          activeTab={activeTab}
          versionDetailState={versionDetailState}
          onShortedProductClick={this.onShortedProductClick}
          onArrowClick={this.onArrowClick}
          isArrowClicked={isArrowClicked}
          callbackHome={this.callbackHome}
          attributeItems={attributeItems}
          closebutton={closebutton}
          isSocialShareModal={isSocialShareModal}
          onShareClick={this.onShareClick}
          categoryID={categoryID}
          convertToversionDetail1={this.convertToversionDetail1}
          backPart={this.state.backpart}
          linkPart={this.state.linkpart}
          embeddedPart={this.state.embeddedpart}
          onFBClick={this.onFBClick}
          onTwitterClick={this.onTwitterClick}
          onLinkClick={this.onLinkClick}
          onEmbeddedClick={this.onEmbeddedClick}
          onAllBackClick={this.onAllBackClick}
          onVsItemClick={this.onVsItemClick}
          isVisibleMenubar={isVisibleMenubar}
          onVisibleMenubarClick={this.onVisibleMenubarClick}
        />
        {/* )} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cbfilterProducts: state.cbfilterProducts
  }
}

// $FlowFixMe
export default connect(mapStateToProps)(DeskTopHome)

//@flow

import * as React from 'react'
import { connect } from 'react-redux'

import InputSearchBar from 'mobilecomponents/inputSearchBar'
import ComparativeProductViewer from './ComparativeProductViewer.jsx'
import ProductDescriptionModal from './ProductDescriptionModal.jsx'
import TypeSelectModal from './TypeSelectModal.jsx'
import TrendingListSection from './TrendingListSection.jsx'


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
    productDetailMenu2,
} from 'utils/metaData'

import './styles.scss'
import {
    LOGO_IMG,
} from 'common/images'

import Search from 'mobilecomponents/search/Search.jsx'
import { SEARCH_BY_NAME, GET_TRENDING_PRODUCTS, GET_DETAIL_PRODUCTION } from 'common/constants'
import { trendingProductType } from 'common/types'
import FilterBtns from "mobilecomponents/common/FilterButton";
import { Link } from "react-router-dom";

type Props = {
    history: {
        push: (path: string) => any
    },
    dispatch: ({ type: string, payload: any }) => any,
    deviceByName: Array<Object>,
    trendingProducts: Array<trendingProductType>,
    smartPhoneDetails: Object,
}

type State = {
    activeFilter: string,
    isAboutPopup: boolean,
    activeTab: string,
    isDescModalVisible: boolean,
    isSeeSpecModalVisible: boolean,
    productName: string,
    isArrowClicked: boolean,
    currentToolTip: string,
    isSuggestProductVisible: boolean,
    productDetailItem: Object,
    sidebar: Array<Object>,

    activeFilter: string,
    isTypeSelectModalVisible: boolean,
    searchKeyWord: string,
    isFocusListModal: boolean
}


class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            activeFilter: 'Iphone X',
            isAboutPopup: true,
            activeTab: 'A1865',
            isDescModalVisible: false,
            isSeeSpecModalVisible: false,
            isSuggestProductVisible: false,
            productName: '',
            currentToolTip: '',
            isArrowClicked: false,
            sidebar: sideBarMenu,
            productDetailItem: {},
            isTypeSelectModalVisible: false,
            searchKeyWord: "",
            isFocusListModal: false,

        }

        this.handleKeyClick = this.handleKeyClick.bind(this);
        props.dispatch({
            type: 'GET_TRENDING_PRODUCTS',
            payload: { url: GET_TRENDING_PRODUCTS }
        })

    }

    onFilterButtonClick = (activeFilter: string) => {
        this.setState({ activeFilter, productName: activeFilter })
    }

    onShortedProductClick = (item: Object) => {

        this.setState({ isDescModalVisible: true })
    }

    onAdvanceSearhClick = () => { }

    onTrendingProductBtnClick = () => {
        // this.setState({ isDescModalVisible: true })
    }

    onModalOuterClick = () => {
        this.setState({ isDescModalVisible: false })
    }

    onAboutPopupClose = () => {
        this.setState({ isAboutPopup: false })
    }

    onHideTrending = () => { }

    onFeedBackClick = () => { }

    onProductTabChange = (activeTab: string) => {
        this.setState({ activeTab })
    }

    onMobileColorSelect = event => { }

    onProductColorSelect = (event: SyntheticEvent<HTMLButtonElement>) => { }

    onProductDetails = (item: Object) => {

        console.log("#####")
        console.log(item.device_id);
        this.props.dispatch({
            type: 'GET_SMARTPHONE_DETAILS',
            payload: { url: GET_DETAIL_PRODUCTION, deviceID: item.device_id, status: 1 }
        })
        this.setState({ isDescModalVisible: true })

    }

    onSelectType = (item: Object) => {
        this.setState({ isTypeSelectModalVisible: true, selectTypeItem: item })
    }

    onReferenceAppClick = () => {
        this.props.history.push('/app/versus')
    }

    onExploreAppClick = () => {
        this.props.history.push('/app/explore')
    }

    getProductByName = productName => {
        const { dispatch } = this.props
        this.setState({ productName })
        if (productName.length > 1) {
            this.setState({ isSuggestProductVisible: true })
            dispatch({
                type: 'GET_DEVICE_BY_NAME',
                payload: { url: SEARCH_BY_NAME, name: productName }
            })
        } else {
            this.setState({ isSuggestProductVisible: false })
            dispatch({
                type: 'RESET',
                payload: { type: 'GET_DEVICE_BY_NAME_RESET' }
            })
        }
    }


    onTrendingMouseOver = currentToolTip => {
        this.setState({ currentToolTip })
    }

    onArrowClick = () => {
        this.setState({ isArrowClicked: !this.state.isArrowClicked })
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

    handleKeyClick = () => {
        this.setState({ isFocusListModal: true })

    }

    render() {
        const {
            activeFilter,
            isAboutPopup,
            isDescModalVisible,
            isSuggestProductVisible,
            productName,
            currentToolTip,
            isArrowClicked,
            productDetailItem,
            isTypeSelectModalVisible,
            searchKeyWord,
            isFocusListModal,
        } = this.state
        const { trendingProducts, deviceByName, smartPhoneDetails } = this.props
        return (
            <div className="mobile-wrapper">
                <div className="m_logo_outer">
                    <img src={LOGO_IMG} className="logo" />
                </div>
                <div className="m_techspec-title">
                    <h2 className="m_main">Welcome to TechSpecs.</h2>
                    <p className="m_sub">Use our search engine to find and compare the detailed specs of any consumer electronics device in the world</p>
                </div>

                <div className="m_techspec-cont">
                    <div className="container cstm-container">
                        <InputSearchBar
                            activeFilter={activeFilter}
                            techClass="m_tech-ipt"
                            techContentClass="m_tech-cont"
                            deviceByName={deviceByName}
                            isSuggestProductVisible={isSuggestProductVisible}
                            tagRowClass="pos-relative"
                            handleKeyClick={this.handleKeyClick}
                        // onValueChange={e => this.getProductByName(e.target.value)}
                        >

                            <Search
                                placeholder="Press here to find specs."
                                defaultValue={productName}
                                onValueChange={e => this.getProductByName(e.target.value)}
                            />

                        </InputSearchBar>


                    </div>

                </div>
                <ComparativeProductViewer
                    deviceByName={deviceByName}
                    onShortedProductClick={this.onShortedProductClick}
                    onAdvanceSearhClick={this.onAdvanceSearhClick}
                    onProductDetails={this.onProductDetails}
                    onValueChange={e => this.getProductByName(e.target.value)}
                    // initialSearchKeyWord={searchKeyWord}
                    isSuggestProductVisible={isSuggestProductVisible}
                    isFocusListModal={isFocusListModal}
                />
                {/* Product Description Modal */}
                {isDescModalVisible && (
                    < ProductDescriptionModal
                        {...this.state}
                        onModalOuterClick={this.onModalOuterClick}
                        onSelectType={this.onSelectType}
                        sideBarMenu={this.state.sidebar}
                        socialApp={socialApp}
                        relatedProductsData={relatedProducts}
                        tabList={tabList}
                        tabPane={tabPane}
                        productDetailMenu1={productDetailMenu1}
                        productDetailMenu2={productDetailMenu2}
                        productDetailItem={smartPhoneDetails}
                        onProductTabChange={this.onProductTabChange}
                        onProductColorSelect={this.onProductColorSelect}
                        onAdvanceSearhClick={this.onAdvanceSearhClick}
                        activeTab="A1865"
                        onShortedProductClick={this.onShortedProductClick}
                        onArrowClick={this.onArrowClick}
                        isArrowClicked={isArrowClicked}
                        callbackHome={this.callbackHome}
                    />
                )}
                {isTypeSelectModalVisible && (
                    <TypeSelectModal
                        {...this.state}
                        onSelectType={this.onSelectType}
                        tabList={tabList}
                        callbackHome={this.callbackHome}
                        activeTab="A1865"
                    />
                )}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        trendingProducts: state.trendingProducts.trendingProducts.trending,
        deviceByName: state.deviceByName,
        smartPhoneDetails: state.smartPhoneDetails,
    }
}

// $FlowFixMe
export default connect(mapStateToProps)(Home)

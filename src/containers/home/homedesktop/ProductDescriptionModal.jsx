//@flow

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalSideBar from 'components/modalSidebar'
import ModalHeader from 'components/modalHeader'
import RelatedProducts from 'components/relatedProducts'
import Tabs from 'components/common/Tabs'
import ProductDescriptionTable from 'components/productDescriptionTable'
import ProductVideos from 'components/productVideos'
import ReviewContainer from 'components/reviewContainer'
import CommentContainer from 'components/commentContainer'

import { WHITE_VS_ICN, SEARCH_IMG, CLOSE_IMG, ARROW_ICON } from 'common/images'
import './styles.scss'
import './hiddenoverflow.scss'

type SocialAppType = { socialName: string, className: string }

type RelatedProductsType = { productName: string, version: string }

type TabListType = { tabName: string, status: string }
type TabPaneType = { paneName: string }

type Props = {
  onShortedProductClick: (val: any) => any,
  onAdvanceSearhClick: (val: any) => any,
  onProductTabChange: (val: string, val: string, val: string) => any,
  activeTab: string,
  onProductColorSelect: (event: any) => any,
  onModalOuterClick: (event: any) => any,
  socialApp: Array<SocialAppType>,
  sideBarMenu: Array<string>,
  relatedProductsData: Array<Object>,
  tabList: Array<TabListType>,
  tabPane: Array<TabPaneType>,
  onArrowClick: () => any,
  isArrowClicked: boolean,
  productDetailItem: Object,
  callbackHome: (data: number) => any,
  onhandleShow: (index: number) => any,
  versionDetailState: Object,
  attributeItems: Array<string>,
  closebutton: boolean,
  isSocialShareModal: boolean,
  onShareClick: () => any,
  categoryID: string,
  backPart: boolean,
  linkPart: boolean,
  embeddedPart: boolean,
  isDescModalVisible: boolean,
  isVisibleMenubar: boolean,
  convertToversionDetail: (val: any, val: any) => any,
  convertToversionDetail1: (val: any, val: any) => any,
  onFBClick: () => any,
  onTwitterClick: () => any,
  onLinkClick: () => any,
  onEmbeddedClick: () => any,
  onAllBackClick: () => any,
  onVsItemClick: () => any,
  onVisibleMenubarClick: () => any
}

const ProductDescriptionModal = (props: Props) => {
  const {
    socialApp,
    sideBarMenu,
    onProductTabChange,
    activeTab,
    onProductColorSelect,
    relatedProductsData,
    tabList,
    tabPane,
    productDetailMenu1,
    productDetailMenu2,
    onModalOuterClick,
    onArrowClick,
    isArrowClicked,
    productDetailItem,
    versionDetailState,
    attributeItems,
    closebutton,
    isSocialShareModal,
    onShareClick,
    categoryID,
    AllversionDetail,
    convertToversionDetail1,
    backPart,
    linkPart,
    embeddedPart,
    onFBClick,
    onTwitterClick,
    onLinkClick,
    onEmbeddedClick,
    onAllBackClick,
    isDescModalVisible,
    onVsItemClick,
    isVisibleMenubar,
    onVisibleMenubarClick
  } = props

  const [sidenav, setSideNav] = useState(0)
  const versiondetail = typeof versionDetailState.versionDetailState.result !== "undefined" ? versionDetailState.versionDetailState.result.specification : {};
  console.log(versiondetail)
  const images = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.images : [];
  const specfications = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.specification : {};
  const versions = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.version : [];
  const activedVersionTab = typeof versions[0] !== "undefined" ? versions[0].version_name : '';

  convertToversionDetail1(versions, specfications)
  const callbackFunction = (data = 0) => {
    setSideNav(data)
    props.callbackHome(data)
  }

  const onhandleShow = (index) => {
    console.log(index);
    var paneref = "panepart" + index;
    var paneindex = document.getElementsByClassName("paneindex");
    for (var j = 0; j < paneindex.length; j++) {
      paneindex[j].classList.remove("active");
    }
    paneindex[index].classList.add('active');

    var object = document.getElementById(paneref);
    object.scrollIntoView({ block: 'start', behavior: 'smooth' });
    var session_objects = document.getElementsByClassName("session_title")
    for (var i = 0; i < session_objects.length; i++) {
      session_objects[i].classList.remove("active");
    }
    session_objects[index].classList.add("active")
  }

  const getAttributeByName = (value) => {

    if (attributeItems !== "undefined" || attributeItems.length != 0) {
      var count = 0;
      var check = attributeItems.includes(value);
      if (check) {
        var object = document.getElementById(value);
        object.scrollIntoView(true, { behavior: 'smooth' });
      } else {
        var object = document.getElementById("panepart0");
        object.scrollIntoView(true, { behavior: 'smooth' });
      }

    }

  }

  return (
    <div className={isDescModalVisible ? "iphone left0" : "iphone"}>
      <div className="left-portion" onClick={onModalOuterClick} />
      <ModalSideBar
        sideBarMenu={sideBarMenu}
        Menus={specfications}
        productDetailMenu2={productDetailMenu2}
        socialApp={socialApp}
        parentCallback={callbackFunction}
        onhandleShow={onhandleShow}
        onVisibleMenubarClick={onVisibleMenubarClick}
        deviceImage={typeof images[0] !== "undefined" ? images[0].name.original : ""}
      />
      <div className="iphn-rgt">
        <ModalHeader
          onArrowClick={onArrowClick}
          isArrowClicked={isArrowClicked}
          onShareClick={onShareClick}
          isVisibleMenubar={isVisibleMenubar}
          deviceName={typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.name : ""}
        />
        {isArrowClicked && (
          <RelatedProducts relatedProductsData={relatedProductsData} />
        )}
        {sidenav == 0 && (
          <div className="spec-container">
            <div className="iphn-tab">
              <Tabs
                tabList={versions}
                onTabChange={onProductTabChange}
                activeTab={activeTab}
                productID={typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.product_id : ""}
              />
              {/* <button type="button" className="suggest_btn">
                <i className="fa fa-outdent" aria-hidden="true"></i> Suggest
                Edit
              </button> */}
              <div className="suggest_btn">
                <img src={SEARCH_IMG} />
                <input type="text" className="searchTerm" placeholder="Find a Spec..." onChange={(e) => getAttributeByName(e.target.value)} />
                <img className="close_size" src={CLOSE_IMG} />
              </div>

              <ProductDescriptionTable
                onProductColorSelect={onProductColorSelect}
                paneList={specfications}
                versionDetailState={versiondetail}
                attributeItems={attributeItems}
                closebutton={closebutton}
              />
            </div>
            <div className={isDescModalVisible ? "plus_toggle plus_toggle_fixed" : "plus_toggle"} onClick={onVsItemClick}>
              <Link to="">
                <span>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </span>
              </Link>
              <img src={WHITE_VS_ICN} alt="versus-icon" />
            </div>
          </div>
        )}
        {sidenav === 1 && <ReviewContainer />}
        {sidenav === 2 && <ProductVideos />}
        {sidenav === 3 && <CommentContainer />}
      </div>
      {
        !isSocialShareModal && (
          <div className="social_part">
            {
              backPart ? <div className="back_part" onClick={onAllBackClick}>
                <i className="fa fa-angle-left icon_size" />
                <b className="back_title" >Back</b>
              </div> : null
            }

            <div className="share_social_part" id="social">
              <div className="face_style" onClick={onFBClick}>
                <i className="fa fa-facebook-f face_name"></i>
              </div>
              <div className="face_style twitter" onClick={onTwitterClick}>
                <i className="fa fa-twitter face_name"></i>
              </div>
              <div className="face_style chain" onClick={onLinkClick}>
                <i className="fa fa-link face_name"></i>
              </div>
              <div className="face_style embed" onClick={onEmbeddedClick}>
                <i className="fa fa-code face_name"></i>
              </div>
            </div>
            {
              linkPart ? <div className="link_part">
                <p>Link has been copied.</p>
              </div> : null
            }

            {
              !embeddedPart ? <div className="bottom_part">
                <div className="bottom_part1">

                </div>
                <div className="bottom_part2">
                  <p>Embed code has been copied.</p>
                </div>
              </div> : null
            }

          </div>
        )
      }

    </div>
  )
}
export default ProductDescriptionModal

//@flow
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalSideBar from 'mobilecomponents/modalSidebar'
import ModalHeader from 'mobilecomponents/modalHeader'
import RelatedProducts from 'mobilecomponents/relatedProducts'
import Tabs from 'mobilecomponents/common/Tabs'
import ProductDescriptionTable from 'mobilecomponents/productDescriptionTable'
import ProductVideos from 'mobilecomponents/productVideos'
import ReviewContainer from 'mobilecomponents/reviewContainer'
import CommentContainer from 'mobilecomponents/commentContainer'

import { WHITE_VS_ICN, PHONE_IMG, LEFT_ARROW } from 'common/images'
import './styles.scss'
import { Object } from 'es6-shim'

type SocialAppType = { socialName: string, className: string }

type RelatedProductsType = { productName: string, version: string }

type TabListType = { tabName: string, status: string }
type TabPaneType = { paneName: string }

type Props = {
    onShortedProductClick: (val: any) => any,
    onAdvanceSearhClick: (val: any) => any,
    onProductTabChange: (val: string) => any,
    activeTab: string,
    onProductColorSelect: (event: any) => any,
    onModalOuterClick: (event: any) => any,
    onSelectType: (event: any) => any,
    socialApp: Array<SocialAppType>,
    sideBarMenu: Array<string>,
    relatedProductsData: Array<RelatedProductsType>,
    tabList: Array<TabListType>,
    tabPane: Array<TabPaneType>,
    productDetailMenu1: Array<string>,
    productDetailMenu2: Array<string>,
    onArrowClick: () => any,
    isArrowClicked: boolean,
    productDetailItem: Object,
    callbackHome: (data: number) => any
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
        onSelectType
    } = props

    const [sidenav, setSideNav] = useState(0)

    const callbackFunction = (data = 0) => {
        setSideNav(data)
        props.callbackHome(data)
    }
    const [smShow, setSmShow] = useState(false);
    const product = typeof productDetailItem.smartPhoneDetails !== 'undefined' ? productDetailItem.smartPhoneDetails.result : {}
    const specfications = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.specification : {};
    const panlists = Object.keys(specfications).length ? Object.keys(specfications) : []
    console.log("smarttphoneeeeeeeee")
    console.log(specfications);
    return product ? (
        <div className="m_iphone m_left0">
            <div className="m_phone-title m_phone-type">
                <div className="m_image_size" onClick={() => onModalOuterClick()}>
                    <img src={LEFT_ARROW} />
                </div>
                <span className="ptitle">{product.name}</span>
                <h5 className="ptype" onClick={() => setSmShow(true)}>
                    {typeof product.version[0] !== 'undefined' ? product.version[0].version_name : ""}
                    <span className="caret"></span>
                </h5>
            </div>
            <div className="m_phone-img">
                <img src={typeof product.images[0] !== "undefined" ? product.images[0].name.original : PHONE_IMG} />
            </div>
            <div className="m_phone-design">
                {
                    panlists &&
                    panlists.map((item, index) => {
                        return (
                            <div key={index} className="section-title border-bottom bottom">
                                <h6 className="section-title-color">{item}</h6>

                                {
                                    product.specification[item] &&
                                    Object.keys(product.specification[item]).map((data, i) => {

                                        return data !== "Colors" ? (
                                            <div className="phone-features">
                                                <div key={i} className="feature border-bottom" >
                                                    <div className="feature-title">
                                                        <span>{data}</span>
                                                    </div>
                                                    <div className="feature-value">
                                                        <span>{product.specification[item][data].value}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                                <div className="feature-value feature-value-flex">


                                                    {
                                                        product.specification.Body.Colors.value &&
                                                        product.specification.Body.Colors.value.map((item1, index1) => {
                                                            return (
                                                                <div key={index1} className="color-img">
                                                                    <div className="img-outer">
                                                                        <img src={PHONE_IMG} />
                                                                    </div>

                                                                    <div>
                                                                        <input name="group5" type="radio" id="radio_34" checked={true} className="with-silver radio-col-indigo" />
                                                                        <label htmlFor="radio_34"></label>
                                                                    </div>
                                                                    <p>{item1.color_name}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }


                                                    {/*                                                    
                                                    <div className="color-img">
                                                        <div className="img-outer">
                                                            <img src={PHONE_IMG} />
                                                        </div>
                                                        <div>
                                                            <input name="group5" type="radio" id="radio_35" className="with-gray radio-col-indigo" />
                                                            <label htmlFor="radio_35"></label>
                                                        </div>
                                                        <p>Space Gray</p>
                                                    </div>
                                                    <div className="color-img">
                                                        <div className="img-outer">
                                                            <img src={PHONE_IMG} />
                                                        </div>
                                                        <div>
                                                            <input name="group5" type="radio" id="radio_36" className="with-gold radio-col-indigo" />
                                                            <label htmlFor="radio_36"></label>
                                                        </div>
                                                        <p>Gold</p>
                                                    </div> */}

                                                </div>
                                            )

                                    })
                                }


                            </div>


                        )
                    })
                }
                {/* <div className="section-title border-bottom">
                    <h6 className="section-title-color">Design</h6>
                    <div className="phone-features">
                        {
                            product.specification.Body &&
                            Object.keys(product.specification.Body).map((data, i) => {

                                return data !== "Colors" ? (
                                    <div key={i} className="feature border-bottom" >
                                        <div className="feature-title">
                                            <span>{data}</span>
                                        </div>
                                        <div className="feature-value">
                                            <span>{product.specification.Body[data].value}</span>
                                        </div>
                                    </div>
                                ) : (
                                        <div className="feature-value feature-value-flex">
                                            <div className="color-img">
                                                <div className="img-outer">
                                                    <img src={PHONE_IMG} />
                                                </div>

                                                <div>
                                                    <input name="group5" type="radio" id="radio_34" className="with-silver radio-col-indigo" />
                                                    <label htmlFor="radio_34"></label>
                                                </div>
                                                <p>Silver</p>
                                            </div>
                                            <div className="color-img">
                                                <div className="img-outer">
                                                    <img src={PHONE_IMG} />
                                                </div>
                                                <div>
                                                    <input name="group5" type="radio" id="radio_35" className="with-gray radio-col-indigo" />
                                                    <label htmlFor="radio_35"></label>
                                                </div>
                                                <p>Space Gray</p>
                                            </div>
                                            <div className="color-img">
                                                <div className="img-outer">
                                                    <img src={PHONE_IMG} />
                                                </div>
                                                <div>
                                                    <input name="group5" type="radio" id="radio_36" className="with-gold radio-col-indigo" />
                                                    <label htmlFor="radio_36"></label>
                                                </div>
                                                <p>Gold</p>
                                            </div>

                                        </div>
                                    )

                            })
                        }


                    </div>
                </div> */}

            </div>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                className="in"
            >
                <Modal.Body>
                    <Modal.Header>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Select a model to view specs.
                      </Modal.Title>
                    </Modal.Header>
                    {
                        product.version &&
                        product.version.map((item, index) => {
                            return (
                                <div key={index} className="type_item selected">
                                    {item.version_name}
                                </div>
                            )

                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <h2 className="selected" onClick={() => setSmShow(false)}>Cancel</h2>
                </Modal.Footer>
            </Modal>
        </div >

    ) : null
}
export default ProductDescriptionModal

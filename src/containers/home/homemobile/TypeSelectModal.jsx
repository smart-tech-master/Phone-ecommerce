//@flow

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

import { WHITE_VS_ICN,PHONE_IMG, LEFT_ARROW } from 'common/images'
import './styles.scss'

type TabListType = { tabName: string, status: string }

type Props = {
    callbackHome: (data: number) => any,
    onSelectType: (event: any) => any,
    tabList: Array<TabListType>,
    activeTab: string,

}
const TypeSelectModal = (props: Props) => {
    const {
        onSelectType,
        tabList,
        activeTab,
    } = props

    const [sidenav, setSideNav] = useState(0)
    console.log(tabList);
    const callbackFunction = (data = 0) => {
        setSideNav(data)
        props.callbackHome(data)
    }

    return (
        <div className="m_iphone m_left0">
            <div className="m_phone-title m_phone-type">
                <img src={LEFT_ARROW} />
                <span className="ptitle">iPhone</span>
                <h5 className="ptype">A1865<span className="caret"></span></h5>
            </div>
            <div className="m_phone-img">
                <img src={PHONE_IMG} />
            </div>
            <div className="m_phone-design">
                <div className="section-title border-bottom">
                    <h6 className="section-title-color">DESIGN</h6>
                </div>
                <div className="phone-features">
                    <div className="feature border-bottom">
                        <div className="feature-title">
                            <span>Width</span>
                        </div>
                        <div className="feature-value">
                            <span>70.9mm</span>
                        </div>
                    </div>
                    <div className="feature border-bottom">
                        <div className="feature-title">
                            <span>Height</span>
                        </div>
                        <div className="feature-value">
                            <span>143.9mm</span>
                        </div>
                    </div>
                    <div className="feature border-bottom">
                        <div className="feature-title">
                            <span>Thickness</span>
                        </div>
                        <div className="feature-value">
                            <span>7.7mm, 7.7mm</span>
                        </div>
                    </div>
                    <div className="feature border-bottom">
                        <div className="feature-title">
                            <span>Weight</span>
                        </div>
                        <div className="feature-value">
                            <span>174g</span>
                        </div>
                    </div>
                    <div className="feature border-bottom">
                        <div className="feature-title">
                            <span>Color</span>
                        </div>
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
                                    <input name="group5" type="radio" id="radio_34" className="with-gray radio-col-indigo" />
                                    <label htmlFor="radio_34"></label>
                                </div>
                                <p>Space Gray</p>
                            </div>
                            <div className="color-img">
                                <div className="img-outer">
                                    <img src={PHONE_IMG} />
                                </div>
                                <div>
                                    <input name="group5" type="radio" id="radio_34" className="with-gold radio-col-indigo" />
                                    <label htmlFor="radio_34"></label>
                                </div>
                                <p>Gold</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TypeSelectModal

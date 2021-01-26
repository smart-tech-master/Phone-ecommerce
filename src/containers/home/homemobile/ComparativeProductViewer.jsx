//@flow

import React from 'react'
import ShortedProduct from 'mobilecomponents/shortedProduct'
import Selector from 'mobilecomponents/common/Selector'
import AdvancedSearchButton from 'mobilecomponents/common/AdvancedSearchButton'
import {
    // shortedProduct,
    phoneTypeFilter,
    phoneBrandFilter
} from 'utils/metaData'
import './styles.scss'
import Search from "mobilecomponents/search/Search";
import {
    EXPORE_IMG,
    RIGHT_ARROW,
} from 'common/images'

type Props = {
    deviceByName: Object,
    onShortedProductClick: (val: any) => any,
    onAdvanceSearhClick: (val: any) => any,
    onProductDetails: (Object: any) => any,
    onValueChange: (val: any) => any,
    isFocusListModal: boolean,
    isSuggestProductVisible: boolean
}
const ComparativeProductViewer = (props: Props) => {
    const {
        onShortedProductClick,
        onAdvanceSearhClick,
        deviceByName,
        onProductDetails,
        onValueChange,
        isFocusListModal,
        isSuggestProductVisible
    } = props

    const devices = Object.keys(deviceByName).length
        ? deviceByName.deviceByName.result
        : []
    console.log(devices)
    return isFocusListModal || isSuggestProductVisible || devices ? (
        <div className="m_comparission_dropdown">
            <input
                autoFocus
                type="text"
                // value={initialSearchKeyWord}
                onChange={onValueChange}
            />

            <div className="m_explore">
                <p>Cann't find what you are looking? <b>Try our Explore app.</b></p>
                <div className="m_explore_img">
                    <img src={EXPORE_IMG} />
                </div>
                {/*<AdvancedSearchButton onClick={onAdvanceSearhClick} />*/}
            </div>
            {
                devices &&
                devices.map((item, index) => {
                    const itemObj = {
                        productImg: item.featured_image.thumb,
                        aboutProduct: item.slug,
                        productName: item.device_name,
                        productId: item.device_id,
                    }

                    return (
                        <ShortedProduct
                            key={index}
                            onClick={() => onProductDetails(item)}
                            item={itemObj}
                            detailitem={item}
                        >
                            <div className="m_item_row_rgt">
                                <button type="button button_size" onClick={() => onProductDetails(item)}>
                                    <img src={RIGHT_ARROW} />
                                </button>
                            </div>
                        </ShortedProduct>
                    )
                })}
        </div>
    ) : null
}
export default ComparativeProductViewer

//@flow

import * as React from 'react'
import { PHONE_IMG } from 'common/images'
import './styles.scss'

type Props = {
    onClick: (item: Object) => any,
    item: {
        productImg: string,
        aboutProduct: string,
        productName: string,
        productId: string
    },
    itemRowClass?: string,
    itemRowLeftClass?: string,
    productImageClass?: string,
    productContent?: string,
    children: React.Node,
    detailitem: Object
}

const ShortedProduct = (props: Props) => {
    const {
        item,
        itemRowClass,
        itemRowLeftClass,
        productImageClass,
        productContent,
        children,
        onClick,
        detailitem
    } = props
    const { productName, productImg, aboutProduct, productId } = item
    return (
        <div className="m_item_row_outer" onClick={() => onClick(detailitem)}>
            <div className={itemRowClass || 'm_item_row'}>
                <div className={itemRowLeftClass || 'm_item_row_lft'}>
                    <div className={productImageClass || 'm_mobile_icn'}>
                        <img src={productImg || PHONE_IMG} alt="product" />
                    </div>
                    <div className={productContent || 'm_mobile_contnt'}>
                        <h4>{productName}</h4>
                        <p>{aboutProduct}</p>
                    </div>
                </div>
                {children}
            </div>
        </div>

    )
}

export default ShortedProduct

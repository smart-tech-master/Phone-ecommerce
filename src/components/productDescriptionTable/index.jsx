//@flow

import React from 'react'
import { MOBILE_IMG2, GOLD_PHONE, Silver_PHONE, Black_PHONE } from 'common/images'
import ShortTable from 'components/shorttable'
import './styles.scss'
type PaneListTypes = { paneName: string }
type Props = {
  onProductColorSelect: (event: any) => string,
  paneList: Object,
  versionDetailState:Object,
  attributeItems:Array<string>,
  closebutton:boolean
}

const ProductDescriptionTable = (props: Props) => {
  const { onProductColorSelect, paneList,versionDetailState,attributeItems,closebutton} = props
  const panlistkeys = Object.keys(paneList).length ? Object.keys(paneList) : []
  const check=Object.keys(versionDetailState).length ? true:false
   console.log(check)
   return panlistkeys ? (
    <div className="table_part">
      {
        check? (
           panlistkeys.map((item, index) => {
          return (
            <ShortTable key={index} index={index} item={item} shortItems={typeof versionDetailState[item] !== 'undefined' ? versionDetailState[item] : {}} attributeItems={attributeItems} closebutton={closebutton}/>
          )
        })
        ):(
           panlistkeys.map((item, index) => {
          return (
            <ShortTable key={index} index={index} item={item} shortItems={typeof paneList[item] !== 'undefined' ? paneList[item] : {}}  attributeItems={attributeItems} closebutton={closebutton}/>
          )
        })
        )
      }
    </div >
  ) : null
}
export default ProductDescriptionTable

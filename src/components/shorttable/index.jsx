import React from 'react'
import './styles.scss'
import { MOBILE_IMG2, GOLD_PHONE, Silver_PHONE, Black_PHONE } from 'common/images'
import DeviceColor from 'components/devicecolor'
type Props = {
  shortItems: Object,
  item: string,
  index: number,
  attributeItems:Array<string>
}

const ShortTable = (props: Props) => {
  const { shortItems, item, index,attributeItems} = props
  const shortlists = typeof shortItems !== 'undefined' && Object.keys(shortItems).length ? Object.keys(shortItems) : []
   shortlists.map((item2,index2) =>{
     attributeItems.push(item2)
   })
  
  return shortlists ? (
    <div className="session_part" id={"panepart" + index}>
      <div className={index === 0 ? "session_title active" : "session_title"}>{item}</div>
      {
        shortlists.map((item1, index1) => item1 !== "Colors" ? (
          <div className="attr_part" key={index1} id={item1}>
            <div className="attr_title">{item1}</div>
            <div className="attr_value">{shortItems[item1].value}</div>
          </div>
        ) : (
            <DeviceColor key={index1} colorTitle={item1} colorValues={typeof shortItems[item1].value !== "undefined" ? shortItems[item1].value : []} item={item1}/>
          )
        )
      }
    </div>
  ) : null

}
export default ShortTable
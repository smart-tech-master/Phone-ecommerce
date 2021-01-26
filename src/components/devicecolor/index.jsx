import React from 'react'
import { MOBILE_IMG2, GOLD_PHONE, Silver_PHONE, Black_PHONE } from 'common/images'
import './styles.scss'

type Props = {
  colorValues: Array<Object>,
  colorTitle: string,
  item:string,
}

const DeviceColor = (props: Props) => {

  const { colorValues, colorTitle ,item} = props
  console.log(colorValues)
  return colorValues ? (
    <div className="attr_part color_part" id={item}>
      <div className="color_title">{colorTitle}</div>
      {
        colorValues.map((item, index) => {
          return (
            <div key={index} className="iphnimg-col">
              <div className="compare">
                {
                  item.color_name === "Silver" ?
                    (<img src={Silver_PHONE} alt="product-color" />) :
                    item.color_name === "Space gray" ? (<img src={Black_PHONE} alt="product-color" />) : (<img src={GOLD_PHONE} alt="product-color" />)
                }
              </div>
              <div className="custm_radio">
                <input
                  type="radio"
                  id={item.color_name}
                  name="radio-group"
                  value={item.color_name}
                // onChange={event =>
                // onProductColorSelect(event.target.value)
                // }
                />
                <label className="color_name" htmlFor={item.color_name} >{item.color_name}</label>
              </div>
            </div>
          )

        })
      }
    </div>

  ) : null

}

export default DeviceColor
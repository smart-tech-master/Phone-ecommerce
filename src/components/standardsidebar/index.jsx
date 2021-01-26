
import React from 'react'
import './styles.scss'
import { KEY_IMG, PHONE_IMG } from 'common/images'

type Props = {
  Menus: Object,
  deviceImage: string,
  productDetailMenu2: Array<string>,
  onhandleShow: (index: number) => any,
}
const StandardSideBar = (props: Props) => {

  const { Menus, deviceImage, productDetailMenu2, onhandleShow } = props
  const menulist = Object.keys(Menus).length ? Object.keys(Menus) : []
  return (
    <div className="iphn-lft">
      <div>
        {
          deviceImage ? <img src={deviceImage} className="img_position" /> : <img src={PHONE_IMG} className="img_position" />
        }

      </div>
      <div className="key_partion">
        <img className="key_image" src={KEY_IMG} />
        <b className="aspect">key Aspects</b>
      </div>
      <ul className="iphn-spec">
        {menulist &&
          menulist.map((menu, index) => {
            return (
              <li key={index} id={index} className={index === 0 ? 'paneindex  pointer' : 'paneindex'} onClick={() => onhandleShow(index)}>
                <a herf="#">{menu}</a>
              </li>
            )
          })}
      </ul>
      <div className="view_part">
        <b>View Original</b>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="own_radio">
        <div className="radio_part">
          <input type="radio" id="test1" name="radio-group" /><label htmlFor="test1">I Own This Device</label>
        </div>
      </div>
    </div>
  )


}
export default StandardSideBar
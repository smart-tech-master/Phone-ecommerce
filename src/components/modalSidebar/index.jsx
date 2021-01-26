//@flow

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  COMPARE_PHONE,
  SIDENAV_ICON1,
  SIDENAV_ICON2,
  SIDENAV_ICON3,
  SIDENAV_ICON4,
  LOCK_ICON,
  WHITE_ARROW_ICON,
} from 'common/images'
import ButtonComponent from '../common/buttonComponent/ButtonComponent'
import './styles.scss'
import { KEY_IMG, PHONE_IMG } from 'common/images'

type SocialAppType = { socialName: string, className: string }

type Props = {
  socialApp: Array<SocialAppType>,
  sideBarMenu: Array<string>,
  parentCallback: (data: number) => any,
  login?: Boolean,
  deviceImage: string,
  Menus: Object,
  productDetailMenu2: Array<string>,
  onhandleShow: (index: number) => any,
  onVisibleMenubarClick: () => any
}
const ModalSideBar = (props: Props) => {
  const { sideBarMenu, socialApp, deviceImage, Menus, productDetailMenu2, onVisibleMenubarClick } = props

  const [login, setLogin] = useState(true);

  const [activeIcon, setActiveIcon] = useState(0)

  const menulist = Object.keys(Menus).length ? Object.keys(Menus) : []

  const loginAction = event => {
    setLogin(true)
  }

  const sideNavClick = i => {
    setActiveIcon(i)
    props.parentCallback(i)
  }

  return (
    <div className="iphn-lft">
      <div className="iphn-img" onClick={onVisibleMenubarClick}>
        {
          deviceImage ? <img src={deviceImage} className="image-style" alt="" /> : <img src={PHONE_IMG} className="image-style" alt="" />
        }

      </div>
      {/* <div className="brand-style">
        <span className="left-txt">BRAND</span>
        <span className="right-txt">Apple<span className="box-style"><img src={WHITE_ARROW_ICON} /></span></span>

      </div> */}
      <div className="key_part">
        <img src={KEY_IMG} />
        <b className="aspect">key Aspects</b>
      </div>
      <ul className="iphn-spec">
        {menulist &&
          menulist.map((menu, index) => {
            return (
              <li key={index} id={index} className={index === 0 ? 'paneindex active' : 'paneindex'} onClick={() => props.onhandleShow(index)}>
                <a herf="#">{menu}</a>
              </li>
            )
          })}
      </ul>
      <ul className="iphn-spec1">
        {productDetailMenu2 &&
          productDetailMenu2.map((menu, index) => {
            return (
              <li className={index === 0 ? 'active' : ''} key={index}>
                <Link to="#">{menu}</Link>
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
      <div className="own_radio"><input type="radio" id="test1" name="radio-group" /><label htmlFor="test1">I Own This Device</label></div>
      {!login && (
        <ul className="social_icons">
          {socialApp.map((item, i) => {
            return (
              <li className={item.socialName} key={i}>
                <img src={item.className} alt="" />
                {/* {item.socialName !== 'specs' && (
                  <img className="lock-icon" src={LOCK_ICON} alt="" />
                )} */}
                {item.socialName !== 'specs' && (
                  <div className="social_tooltip">
                    <p>
                      This feature is available for TechSpecs users only.
                      SIgn-up for free or login to your account to gain access
                      'TechSpecs Blocks.'
                    </p>
                    <Link to="/signup">
                      <ButtonComponent
                        children="Sign Up"
                        className="btn tooltip-btn"
                        onClick={() => { }}
                      />
                    </Link>
                    <ButtonComponent
                      children="Login"
                      className="btn tooltip-btn login-btn"
                      onClick={loginAction}
                    />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}
      {(
        <ul className="social_login_icons">
          {socialApp.map((item, i) => {
            return (
              <li
                className={activeIcon === i ? 'active' : ''}
                key={i}
                onClick={event => sideNavClick(i)}
              >
                <img src={item.className} alt="" />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ModalSideBar

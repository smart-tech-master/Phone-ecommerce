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

type SocialAppType = { socialName: string, className: string }

type Props = {
  socialApp: Array<SocialAppType>,
  sideBarMenu: Array<string>,
  parentCallback: (data: number) => any,
  login?: Boolean,
  deviceImage: string,
  productDetailMenu1: Array<string>,
  productDetailMenu2: Array<string>,
}

const ModalSideBar = (props: Props) => {
  const { sideBarMenu, socialApp, deviceImage, productDetailMenu1, productDetailMenu2 } = props

  const [login, setLogin] = useState(true);

  const [activeIcon, setActiveIcon] = useState(0)

  const loginAction = event => {
    setLogin(true)
  }

  const sideNavClick = i => {
    setActiveIcon(i)
    props.parentCallback(i)
  }

  return (
    <div className="iphn-lft">
      <div className="iphn-img">
        <img src={deviceImage} className="image-style" alt="" />
      </div>
      <div className="brand-style">
        <span className="left-txt">BRAND</span>
        <span className="right-txt">Apple<span className="box-style"><img src={WHITE_ARROW_ICON} /></span></span>

      </div>
      <ul className="iphn-spec">
        {productDetailMenu1 &&
          productDetailMenu1.map((menu, index) => {
            return (
              <li className={index === 0 ? 'active' : ''} key={index}>
                <Link to="#">{menu}</Link>
              </li>
            )
          })}
      </ul>
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
      {login && (
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

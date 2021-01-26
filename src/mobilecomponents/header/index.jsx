//@flow

import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '../common/buttonComponent/ButtonComponent'
import HeaderButton from '../common/HeaderButton'
import { LOGO_IMG } from 'common/images'
import { Dropdown } from 'react-bootstrap'
import './styles.scss'
import profilephoto from '../../assets/images/1.jpg'

type Props = {
  onFeedBackClick: () => any,
  location: Object,
  headerClass?: string
}

const Header = (props: Props) => {
  const [signupClass, setSignupClass] = useState('btn btn-header')

  const [loginClass, setLoginClass] = useState('btn btn-header')

  useEffect(() => {
    if (props.location.pathname === '/signup') {
      setSignupClass('btn btn-header select-button')
    }
    if (props.location.pathname === '/login') {
      setLoginClass('btn btn-header select-button')
    }
  }, [])

  return (
    <header className={props.headerClass}>

      <div className="hdr">
        <div className="hdr-logo">
          <Link to="/">
            <img src={LOGO_IMG} alt="" />
          </Link>
        </div>
        <div className="hdr-bar">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="hdr-nav">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/guideline">Brand Guidelines</Link>
            </li>
            <li>
              <Link to="#">API</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#">Send Feedback</Link>
            </li>
            <Button className="header-signup btn btn-primary" onClick={props.onFeedBackClick}>Sign up</Button>
            <Button className="header-login btn btn-primary" onClick={props.onFeedBackClick}>Log in</Button>

          </ul>

        </div>
      </div>

    </header>
  )
}

export default withRouter(Header)

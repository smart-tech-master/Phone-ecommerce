//@flow
import React from 'react'
import { Link } from 'react-router-dom'
import {btn_dark} from '../../containers/signup/signup.module.scss'
import './styles.scss'

type Props = {
  link: string,
  btnText: string,
  className?: string,
  iconClass: string
}
const IconButton = (props: Props) => {
  const { link, btnText, className, iconClass } = props
  return (
      <Link to={link}>
        <button
          type="button"
          className={className || btn_dark}
        >
          <span className="iconbutton-icon">
            <i className={iconClass} aria-hidden="true" />
          </span>
          {btnText}
        </button>
      </Link>
  )
}

export default IconButton

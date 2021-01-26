//@flow
import React from 'react'
import './styles.scss'

type Props = {
  onClick: () => any,
  btnText: string,
  className?: string
}
const HeaderButton = (props: Props) => {
  const { onClick, btnText, className } = props
  return (
    <button
      type="button"
      className={className || 'default_btn'}
      onClick={onClick}
    >
      {btnText}
      <i className="fa fa-caret-down header-icon"></i>
    </button>
  )
}

export default HeaderButton

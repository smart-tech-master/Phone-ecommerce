//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import 'containers/home/homedesktop/styles.scss'
import './styles.css'

type Props = {
  onClick: (item: string) => any,
  item: string,
  className?: string,
  toolTipTitle?: string,
  trendingClass?: string,
  onMouseOver?: (item: string) => any,
  currentToolTip?: string,
  hideClass?: string
}
const ButtonWithTooltip = (props: Props) => {
  const {
    onClick,
    item,
    className,
    toolTipTitle,
    trendingClass,
    onMouseOver,
    currentToolTip,
    hideClass
  } = props
  return (
    <li
      className={hideClass ? hideClass : trendingClass}
      onMouseOver={() => onMouseOver && onMouseOver(item)}
    >
      <a to="#" onClick={() => onClick(item)}>
        {item}
      </a>
      {/* {toolTipTitle && item === currentToolTip && (
        <div className={className || 'cstm_tooltip tag_tip'}>
          <p>{toolTipTitle}</p>
        </div>
      )} */}
    </li>
  )
}

export default ButtonWithTooltip

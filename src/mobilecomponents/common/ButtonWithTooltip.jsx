//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import 'containers/home/homemobile/styles.scss'

type Props = {
  onClick: (item: string) => any,
  item: string,
  className?: string,
  toolTipTitle?: string,
  trendingClass?: string,
  onMouseOver?: (item: string) => any,
  currentToolTip?: string
}
const ButtonWithTooltip = (props: Props) => {
  const {
    onClick,
    item,
    className,
    toolTipTitle,
    trendingClass,
    onMouseOver,
    currentToolTip
  } = props
  return (
    <li
      className={trendingClass}
      onMouseOver={() => onMouseOver && onMouseOver(item)}
    >
      <Link to="#" onClick={() => onClick(item)}>
        {item}
      </Link>
      {toolTipTitle && item === currentToolTip && (
        <div className={className || 'cstm_tooltip tag_tip'}>
          <p>{toolTipTitle}</p>
        </div>
      )}
    </li>
  )
}

export default ButtonWithTooltip

//@flow
import * as React from 'react'
import '../styles.scss'

type Props = {
  onClick: () => any,
  className?: string,
  dataToggel?: string,
  dataTarget?: string,
  children: React.Node
}
const ButtonComponent = (props: Props) => {
  const { onClick, className, children, dataToggel, dataTarget } = props
  return (
    <button
      type="button"
      className={className || 'default_btn'}
      onClick={onClick}
      data-toggle={dataToggel}
      data-target={dataTarget}
    >
      {children}
    </button>
  )
}

export default ButtonComponent

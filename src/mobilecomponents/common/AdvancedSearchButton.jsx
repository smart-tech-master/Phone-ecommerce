//@flow
import React from 'react'
import './styles.scss'
type Props = {
  onClick: () => any,
  wrapperClass?: string
}
const AdvancedSearchButton = (props: Props) => {
  const { onClick, wrapperClass } = props
  return (
    <button onClick={onClick} className={wrapperClass || 'drop_rgt'}>
      <span className="filter_icn">
        <i className="fa fa-filter" aria-hidden="true" />
      </span>
      Advanced Search
    </button>
  )
}

export default AdvancedSearchButton

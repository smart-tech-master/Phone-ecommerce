//@flow

import React from 'react'
import './styles.scss'

type Props = {
  onClick: (val: string) => any,
  btnList: Array<Object>,
  wrapperClass?: string,
  activeFilter: string
}
const FilterButton = (props: Props) => {
  const { onClick, btnList, wrapperClass, activeFilter } = props
  const suggestions =
    typeof btnList.deviceByName !== 'undefined'
      ? btnList.deviceByName.suggestion_device_name
      : []
  return suggestions ? (
    <div className={wrapperClass || 'tags_row'}>
      {suggestions.map((data, index) => {
        return (
          <button
            key={index}
            onClick={
              onClick
                ? () => onClick(data.v_product_name)
                : console.log('Btn handler not found for filterButton')
            }
            className={activeFilter === data ? 'tag active' : 'tag'}
          >
            {data.v_product_name}
          </button>
        )
      })}
    </div>
  ) : null
}

export default FilterButton

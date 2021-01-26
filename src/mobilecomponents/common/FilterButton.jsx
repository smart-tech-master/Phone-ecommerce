//@flow

import React from 'react'
import './styles.scss'

type Props = {
  onClick: (val: string) => any,
  btnList: Array<string>,
  wrapperClass?: string,
  activeFilter: string
}
const FilterButton = (props: Props) => {
  const { onClick, btnList, wrapperClass, activeFilter } = props
  return (
    <div className={wrapperClass || 'tags_row'}>
      {btnList.map((data, index) => {
        return (
          <button
            key={index}
            onClick={
              onClick
                ? () => onClick(data)
                : console.log('Btn handler not found for filterButton')
            }
            className={activeFilter === data ? 'tag active' : 'tag'}
          >
            {data}
          </button>
        )
      })}
    </div>
  )
}

export default FilterButton

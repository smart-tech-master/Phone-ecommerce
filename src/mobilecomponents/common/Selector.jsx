//@flow

import React from 'react'
import './styles.scss'

type Props = {
  optionList: Array<string>
}
const Selector = (props: Props) => {
  const { optionList } = props
  return (
    <select className="form-control">
      {Array.isArray(optionList) &&
        optionList.map((data, index) => <option key={index}>{data}</option>)}
    </select>
  )
}

export default Selector

//@flow

import React from 'react'

type Props = {
  rowStyle: string,
  colPropertyStyle: string,
  colValueStyle: string,
  property: string,
  value: string
}
const Selector = (props: Props) => {
  const { rowStyle, colPropertyStyle, colValueStyle, property, value } = props
  return (
    <tr className={rowStyle}>
      <td className={colPropertyStyle}>{property}</td>
      <td className={colValueStyle}>{value}</td>
    </tr>
  )
}

export default Selector

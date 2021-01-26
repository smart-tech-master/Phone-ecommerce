//@flow

import React from 'react'
import IconButton from 'components/common/IconButton'
import {
  authButton
} from 'utils/metaData'

const ButtonGroup = () => {
  return (
      <>
        {authButton.map((item, i) => (
            <IconButton
                link={item.link}
                btnText={item.btnText}
                className={item.className}
                iconClass={item.iconClass}
                key={i}
            />
          ))}
      </>
  )
}
export default ButtonGroup

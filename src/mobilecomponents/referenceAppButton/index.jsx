//@flow

import React from 'react'

type Props = {
  data: Object,
  onReferenceAppClick: () => any,
}

const ReferenceAppButton = (props: Props) => {
  const { onReferenceAppClick, data, onExploreAppClick } = props
  //console.log(onReferenceAppClick);
  console.log(data.index)
  return (

    <div className={data.className} onClick={data.index === 2 ? onExploreAppClick : onReferenceAppClick}>
      <div className="apps-cont">
        <img src={data.img} alt={data.appName} />
        <p>{data.appName}</p>
        <div className="cstm_tooltip">
          <p>{data.description}</p>
          <p className="try_now">Try Now</p>
        </div>
      </div>
    </div >
  )
}

export default ReferenceAppButton

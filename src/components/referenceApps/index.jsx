//@flow

import React from 'react'
import { referenceAppsData } from 'utils/metaData'
import ReferenceAppButton from '../referenceAppButton/index.jsx'
import './styles.scss'

type Props = {
  onReferenceAppClick: () => any,
  onExploreAppClick: () => any,

}
const ReferenceApps = (props: Props) => {
  const { onReferenceAppClick, onExploreAppClick } = props
  return (
    <div className="tech-app">
      <p>Apps</p>
      <div className="app-box">
        {referenceAppsData.map((data, index) => (
          <ReferenceAppButton
            key={index}
            data={data}
            onReferenceAppClick={onReferenceAppClick}
            onExploreAppClick={onExploreAppClick}
          />
        ))}
      </div>
    </div>
  )
}
export default ReferenceApps

//@flow

import React from 'react'
import { COMPARE_ICON1, VS_ICON } from 'common/images'
import './styles.scss'

type Props = {}
const VersusSideBar = (props: Props) => {
  return (
    <div className="vscol-1 clear">
      <div className="vscol-img">
        <img src={COMPARE_ICON1} alt="compare-logo" />
      </div>
      <div className="vs-cont">
        <img src={VS_ICON} alt="versus-logo" />
        <ul className="StepProgress">
          <li className="StepProgress-item is-done">
            <p>Description</p>
            <p>Compare two or more products on-demand with using Versus.</p>
          </li>
          <li className="StepProgress-item is-done">
            <p>Publisher</p>
            <p>TechSpecs, Inc</p>
          </li>
          <li className="StepProgress-item current">
            <p>Version</p>
            <p>1.02</p>
          </li>
          <li className="StepProgress-item">
            <p>Release Date</p>
            <p>13 Aug 2019</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default VersusSideBar

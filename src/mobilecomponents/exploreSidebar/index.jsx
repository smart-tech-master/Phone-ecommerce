//@flow

import React from 'react'
import { COMPARE_ICON2, EXPLORE_NAME } from 'common/images'
import { vscol_1, vscol_img, vs_cont, StepProgress, StepProgress_item, explore_text } from './styles.module.scss'

type Props = {}
const ExploreSideBar = (props: Props) => {
  return (
    <div className={vscol_1}>
      <div className={vscol_img}>
        <img src={COMPARE_ICON2} alt="compare-logo" />
      </div>
      <div className={vs_cont}>
        <img src={EXPLORE_NAME} />
        <ul className={StepProgress}>
          <li className={StepProgress_item}>
            <p>Description</p>
            <p>Discover thousands of products with personalised filters.</p>
          </li>
          <li className={StepProgress_item}>
            <p>Publisher</p>
            <p>TechSpecs, Inc</p>
          </li>
          <li className={StepProgress_item}>
            <p>Version</p>
            <p>1.02</p>
          </li>
          <li className={StepProgress_item}>
            <p>Release Date</p>
            <p>11 Sep 2019</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExploreSideBar

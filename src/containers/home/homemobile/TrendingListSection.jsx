//@flow

import React from 'react'
import ButtonWithTooltip from 'mobilecomponents/common/ButtonWithTooltip'
// import { trendingProductsList } from 'utils/metaData'
import './styles.scss'
import { trendingProductType } from 'common/types'

type trendingProductBtnClickType = {
  onTrendingProductBtnClick: () => any,
  onHideTrending: () => any,
  trendingProducts: Array<trendingProductType>,
  onMouseOver?: (item: string) => any,
  currentToolTip: string
}
const TrendingListSection = (props: trendingProductBtnClickType) => {
  const { onMouseOver, currentToolTip } = props
  const trendingProducts = props.trendingProducts ? props.trendingProducts : []
  return (
    <div className="tech-drop">
      <p>Trending</p>
      <ul>
        {trendingProducts.map((item, index) => (
          <ButtonWithTooltip
            onMouseOver={onMouseOver}
            currentToolTip={currentToolTip}
            toolTipTitle="80k users searched for this keyword last week."
            key={index}
            item={item.device_name}
            onClick={props.onTrendingProductBtnClick}
          />
        ))}
        <ButtonWithTooltip
          item="See 32+ More"
          trendingClass="see-more"
          onClick={props.onHideTrending}
        />
      </ul>
    </div>
  )
}
export default TrendingListSection

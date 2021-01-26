//@flow

import React from 'react'
import ButtonWithTooltip from 'components/common/ButtonWithTooltip'
// import { trendingProductsList } from 'utils/metaData'
import './styles.scss'
import { trendingProductType } from 'common/types'

type trendingProductBtnClickType = {
  onTrendingProductBtnClick: (device_id: string, category: string) => any,
  onHideTrending: () => any,
  onVisibleTrending: () => any,
  trendingProducts: Array<trendingProductType>,
  onMouseOver?: (item: string) => any,
  currentToolTip: string,
  isDropVisible: boolean
}

const TrendingListSection = (props: trendingProductBtnClickType) => {

  const { onMouseOver, currentToolTip } = props
  const trendingProducts = props.trendingProducts ? props.trendingProducts : []
  console.log(trendingProducts)
  return (
    <div className="tech-drop">
      <p>Trending</p>
      <ul>
        {trendingProducts.map((item, index) => (
          <ButtonWithTooltip onMouseOver={onMouseOver} currentToolTip={currentToolTip}
            toolTipTitle="80k users searched for this keyword last week." key={index} item={item.device_name}
            onClick={() => props.onTrendingProductBtnClick(item.device_id, item.category_id)} />
        ))}
        {
          !props.isDropVisible && (
            <ButtonWithTooltip item="See 32+ More" trendingClass="see-more" onClick={props.onVisibleTrending} />
          )
        }

      </ul>

      <div className={props.isDropVisible ? "trending_show animated" : "trending_hide animated"}>
        <ul>
          {trendingProducts.map((item, index) => (
            <ButtonWithTooltip onMouseOver={onMouseOver} currentToolTip={currentToolTip}
              toolTipTitle="80k users searched for this keyword last week." key={index} item={item.device_name}
              onClick={() => props.onTrendingProductBtnClick(item.device_id, item.category_id)} />
          ))}

        </ul>
        <ul>
          {trendingProducts.map((item, index) => (
            <ButtonWithTooltip onMouseOver={onMouseOver} currentToolTip={currentToolTip}
              toolTipTitle="80k users searched for this keyword last week." key={index} item={item.device_name}
              onClick={() => props.onTrendingProductBtnClick(item.device_id, item.category_id)} />
          ))}
          <ButtonWithTooltip item="Hide Trendings" hideClass="hide-background" trendingClass="see-more" onClick={props.onHideTrending} />
        </ul>

      </div>

    </div>
  )
}
export default TrendingListSection
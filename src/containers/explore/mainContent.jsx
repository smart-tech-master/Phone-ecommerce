import React from 'react'
import StarRatings from 'react-star-ratings'
import { explore_main, product_content, product_footer, left_vs, see_specs } from './styles.module.scss'
import { COMPARE_PHONE, WHITE_VS_ICN, COMPARE_MOBILE, GOLD_PHONE } from 'common/images'


type ExploreProductType = { image: string, name: string, rating: number }

type Props = {
  exploreProducts: Array<ExploreProductType>,
  exploreTitle: String
}

const MainContent = (props: Props) => {

  const {
    exploreProducts,
    exploreTitle
  } = props

  return (
    <div className={explore_main}>
      <p><b>{exploreTitle} <span>{'(' + exploreProducts.length + ')'}</span></b></p>
      <div>
        <div className="main_style">
          {exploreProducts.map((item, index) => {
            return (
              <div className={product_content} key={index}>
                <img src={item.image} />
                <p><b>{item.name}</b></p>
                <StarRatings
                  rating={4.5}
                  starRatedColor="rgb(3, 169, 244)"
                  numberOfStars={5}
                  name='rating'
                  svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
                  svgIconViewBox='7 7 30 30'
                  starHoverColor="rgb(3, 169, 244)"
                  starDimension="20"
                  starSpacing="0px"
                />
                <span>{item.rating}</span>
                <div className={product_footer}>
                  <div className={left_vs}>
                    <span className={see_specs}><b>See Specs</b></span>
                    <button>
                      <span>+</span>
                      <img src={WHITE_VS_ICN} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainContent
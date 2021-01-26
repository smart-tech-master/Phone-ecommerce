import React, { useState } from 'react'
import StarRatings from 'react-star-ratings'
import { right_sidebar, sub_content, sub_title, sub_allSelect, sub_row, radio, inactive, radio_inactive, color_select, color_part } from './styles.module.scss'
import { COMPARE_PHONE, WHITE_VS_ICN, COMPARE_MOBILE, GOLD_PHONE, SEARCH_IMG, CLOSE_IMG } from 'common/images'
import { explore_brand, explore_categoires, popular_categoires, explore_os, explore_colors } from '../../utils/metaData'
import './styles.scss'

type ExploreProductType = { image: string, name: string, rating: number }

type Props = {
  exploreProducts: Array<ExploreProductType>,
  parentCallback: (data: number) => any,
}

const RightSidebar = (props: Props) => {

  const [check, setCheck] = useState([false, false, false, false, false]);

  const handleCheckChange = index => () => {
    let array = check.slice();
    array[index] = !check[index];
    setCheck(array);
    if (index === 0 && array[index] === true) {
      props.parentCallback(index);
    }
    if (index === 0 && array[index] === false) {
      props.parentCallback(-1);
    }
  }

  const {
    exploreProducts
  } = props

  return (
    <div className={right_sidebar}>
      <div className={sub_content}>
        <div className={sub_title}>
          <span className="filter_font"><b>Filters</b></span>
          <div className="sub_row_first">
            <span className="key_font">ADD KEYWORDS</span>
          </div>
          <div className="filter_part">
            <div className="filter_sub_part">
              <img className="filter_search" src={SEARCH_IMG} />
              <input className="filter_input" placeholder="Apps" />
              <img className="filter_close" src={CLOSE_IMG} />
            </div>
          </div>
        </div>
      </div>

      <div className={sub_content}>
        <div className={sub_title}>
          <span><b>POPULAR CATEGORIES</b></span>
          <span className={sub_allSelect}>Select All</span>
        </div>
        {popular_categoires.map((item, index) => {
          return (
            <div className={sub_row} key={index}>
              <span className={item.class === 'inactive' ? inactive : ''}>{item.name}</span>
              {item.class === 'inactive' && (
                <div className='custom-control custom-switch' style={{ float: 'right' }}>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={index}
                    disabled
                  />
                  <label className='custom-control-label' htmlFor={index} />
                </div>
              )}
              {item.class === 'active' && (
                <div className='custom-control custom-switch' style={{ float: 'right' }}>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={index}
                    checked={check[index]}
                    onChange={handleCheckChange(index)}
                    readOnly
                  />
                  <label className='custom-control-label' htmlFor={index} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className={sub_content}>
        <div className={sub_title}>
          <span><b>ALL CATEGORIES</b></span>
          <span className={sub_allSelect}>Select All</span>
        </div>
        {explore_categoires.map((item, index) => {
          return (
            <div className={sub_row} key={index}>
              <span className={item.class === 'inactive' ? inactive : ''}>{item.name}</span>
              {item.class === 'inactive' && (
                <div className='custom-control custom-switch' style={{ float: 'right' }}>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={8 + index}
                    disabled
                  />
                  <label className='custom-control-label' htmlFor={8 + index} />
                </div>
              )}
              {item.class === 'active' && (
                <div className='custom-control custom-switch' style={{ float: 'right' }}>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={8 + index}
                    checked={check[8 + index]}
                    readOnly
                  />
                  <label className='custom-control-label' htmlFor={8 + index} />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className={sub_content}>
        <div className={sub_title}>
          <span><b>ALL BRANDS</b></span>
          <span className={sub_allSelect}>Select All</span>
        </div>
        {explore_brand.map((item, index) => {
          return (
            <div className={sub_row} key={index}>
              <span className={item.class === 'inactive' ? inactive : ''}>{item.name}</span>
              {item.class === 'inactive' && (
                <div className='custom-control custom-switch' style={{ float: 'right' }}>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={index + 5}
                    disabled
                  />
                  <label className='custom-control-label' htmlFor={index + 5} />
                </div>
              )}
              {item.class === 'active' && (
                <div className='custom-control custom-switch' style={{ float: 'right' }}>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={index + 5}
                  />
                  <label className='custom-control-label' htmlFor={index + 5} />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className={sub_content}>
        <div className={sub_title}>
          <span><b>COLORS</b></span>
          <span className={sub_allSelect}>Select All</span>
        </div>
        {explore_colors.map((item, index) => {
          return (
            <button className={color_select} key={index}>
              <div className={color_part} style={{ backgroundColor: item }}></div>
            </button>
          )
        })}
      </div>
      <div className={sub_content}>
        <div className={sub_title}>
          <span><b>OS</b></span>
          <span className={sub_allSelect}>Select All</span>
        </div>
        {explore_os.map((item, index) => {
          return (
            <div className={sub_row} key={index}>
              <span className={item.class === 'inactive' ? inactive : ''}>{item.name}</span>
              {item.class === 'inactive' && (
                <div className='custom-control custom-switch' style={{ float: 'right' }}>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={index + 10}
                    disabled
                  />
                  <label className='custom-control-label' htmlFor={index + 10} />
                </div>
              )}
              {item.class === 'active' && (
                <div className='custom-control custom-switch' style={{ float: 'right' }}>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id={index + 10}
                  />
                  <label className='custom-control-label' htmlFor={index + 10} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RightSidebar
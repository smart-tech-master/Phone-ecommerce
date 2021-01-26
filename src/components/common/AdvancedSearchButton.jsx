//@flow
import React from 'react'
import './styles.scss'
import { EXPORE_IMG,CLOSE_IMG} from 'common/images'
type Props = {
  onClick: () => any,
  wrapperClass?: string
}
const AdvancedSearchButton = (props: Props) => {
  const { onClick, wrapperClass } = props
  return (
    <div className="advance_part">
      <span>Can’t find what you are looking? <b>Try our Explore app.&nbsp;&nbsp;</b></span>
      <div className="explore_part">
       <a href="/app/explore">
      <img src={EXPORE_IMG} className="image_part"/>
      </a>
      </div>
    </div>
  )
}

export default AdvancedSearchButton

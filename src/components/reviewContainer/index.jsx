//@flow

import React, { useState } from 'react'
import './styles.scss'
import {
  AVATAR,
  ICON_STAR_EMPTY,
  ICON_EMOJI,
  ICON_COMMENT
} from 'common/images'
import StarRatings from 'react-star-ratings'
import Reviews from 'components/reviews'

type Props = {}

const ReviewContainer = (props: Props) => {
  const [rating, setRating] = useState(5)

  const changeRating = () => {}

  const [comment, setComment] = useState('')

  const [emojisShow, setEmojisShow] = useState(false)

  const [postComment, setPostComment] = useState(false)

  const updateText = event => {
    setComment(event.target.value)
    event.stopPropagation()
  }

  const emoji = event => {
    setEmojisShow(!emojisShow)
    event.stopPropagation()
  }

  const post = event => {
    setPostComment(!postComment)
    event.stopPropagation()
  }

  return (
    <div className="review-container">
      <div className="content">
        <p className="titles">
          <b> 32 Reviews </b>
        </p>
        {!postComment && (
          <div className="comment form-group">
            <div className="avatar-input">
              <img src={AVATAR} className="img-avatar" />
              <textarea
                className="form-control input-comment"
                type="text"
                placeholder="Do you have anything to say about this product? Say here..."
                onClick={updateText}
              />
              <div className="emoji-content">
                <img src={ICON_EMOJI} className="img-emoji" onClick={emoji} />
                {emojisShow && (
                  <div className="emojis">
                    ❤️ 😊 👌 👍 😩 😂 😁 💕 😍 😘 😒 😭 😔 😳 ✌️ 😉 😑 😴 😄 😜
                    😋 👏 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😧 😮 😴 🤤 😪 😵 🤐
                    🥴 🤢 😻 😼 😽 🙀 😿 😾 🤲 👐 🙌
                  </div>
                )}
              </div>
            </div>
            <div className="raty-button">
              <span className="forget-text">Don't forget to rate.</span>
              <StarRatings
                rating={rating}
                starRatedColor="rgb(3, 169, 244)"
                changeRating={changeRating}
                numberOfStars={5}
                name="rating"
                svgIconPath="M24.331,22.222a.468.468,0,0,0-.139.418l.719,4.245a1.7,1.7,0,0,1-2.459,1.809l-3.827-2.018a.491.491,0,0,0-.441,0l-3.827,2.018A1.7,1.7,0,0,1,11.9,26.884l.719-4.245a.489.489,0,0,0-.139-.418L9.392,19.206a1.729,1.729,0,0,1-.441-1.74,1.68,1.68,0,0,1,1.369-1.16l4.268-.626a.446.446,0,0,0,.348-.255l1.9-3.874a1.708,1.708,0,0,1,3.062,0h0l1.9,3.874a.446.446,0,0,0,.348.255l4.268.626a1.68,1.68,0,0,1,1.369,1.16,1.637,1.637,0,0,1-.441,1.74Z"
                svgIconViewBox="0 0 30 30"
                starHoverColor="rgb(3, 169, 244)"
                starDimension="30"
                starSpacing="0px"
              />
              <button className="btn btn-lg btn-comment" onClick={post}>
                Post Comment
              </button>
            </div>
          </div>
        )}
        {postComment && (
          <div className="posted">
            <img src={ICON_COMMENT} />
            <p className="posted-text">
              Thank you for reviewing. If you want to edit your review you can
              find it below or 'my reviews' section on your profile settings
            </p>
          </div>
        )}
        <Reviews className={''} />
      </div>
    </div>
  )
}

export default ReviewContainer

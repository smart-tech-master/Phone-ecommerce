//@flow

import React, { useState } from 'react'
import './styles.scss'
import {
  AVATAR,
  ICON_STAR_EMPTY,
  ICON_EMOJI,
  ICON_COMMENT,
  PERSON,
  ICON_ASK
} from 'common/images'
import StarRatings from 'react-star-ratings'
import Reviews from 'mobilecomponents/reviews'
import QuestionComponent from 'mobilecomponents/questionComponent'

type Props = {}

const CommentContainer = (props: Props) => {
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
          <b>QA</b>
        </p>
        {!postComment && (
          <div className="comment form-group">
            <div className="avatar-input">
              <img src={PERSON} className="img-avatar" />
              <textarea
                className="form-control input-comment from-boder"
                type="text"
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
              <button className="btn btn-modify" onClick={post}>
                <img src={ICON_ASK}></img>
                <span className="ask-text">Ask Question</span>
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
        <QuestionComponent className={''} />
      </div>
    </div>
  )
}

export default CommentContainer

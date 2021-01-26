import React, { useState } from 'react'
import './styles.scss'
import { PERSON } from 'common/images'
type Props = {}

const QuestionMarker = (props: Props) => {
  return (
    <div className="avatar-input">
      <img src={PERSON} className="img-avatar" />
      <p className="post-title">
        <span className="post-name">Eugene Diaz</span>
        <span className="post-time">7 hours ago</span>
      </p>
    </div>
  )
}

export default QuestionMarker

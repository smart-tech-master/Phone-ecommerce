import React, { useState } from 'react'
import './styles.scss'
import QuestionMarker from 'mobilecomponents/questionparts/questionmark'
import AddAnswer from 'mobilecomponents/questionparts/addanswer'
import AnswerMarker from 'mobilecomponents/questionparts/answermark'

type Props = {}

const QuestionComponent = (props: Props) => {
  return (
    <div>
      <QuestionMarker />
      <AnswerMarker />
      <AddAnswer />
    </div>
  )
}

export default QuestionComponent

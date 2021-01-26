import React, { useState } from 'react'
import './styles.scss'
import QuestionMarker from 'components/questionparts/questionmark'
import AddAnswer from 'components/questionparts/addanswer'
import AnswerMarker from 'components/questionparts/answermark'

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

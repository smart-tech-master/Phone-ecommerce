import React from 'react'
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'
import {
    ICON_VOICE
} from '../../common/images'

const propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  isListening: PropTypes.bool
}

const options = {
  autoStart: false
}

let isListening = false

const Dictaphone = ({
  transcript,
  stopListening,
  startListening,
  browserSupportsSpeechRecognition,
  placeholder,
  onValueChange
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  const toggleListening = () => {
    isListening ? stopListening() : startListening()
    isListening = !isListening
  }

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={transcript}
        onChange={onValueChange}
      />
      <div className="m_voice_search">
          <button className="m_mic" type="button" onClick={toggleListening}>
              <img src={ICON_VOICE} />
          </button>
          <p>or search by voice</p>
      </div>

    </React.Fragment>
  )
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(options)(Dictaphone)

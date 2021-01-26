import React from 'react'
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  isListening: PropTypes.bool,
  defaultValue: PropTypes.string
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
  onValueChange,
  handleKeyDown,
  is_mic_show,
  defaultValue
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  const toggleListening = () => {
    isListening ? stopListening() : startListening()
    isListening = !isListening
  }
  console.log("dsfdsdsdsfdsf.............")
  console.log(defaultValue)
  return (
    <React.Fragment>
      <input
        id="search_input"
        type="text"
        placeholder={placeholder}
        onChange={onValueChange}
        onKeyDown={handleKeyDown}
      />
      {is_mic_show && (
        <button className="mic" type="button" onClick={toggleListening}>
          <i className="fa fa-microphone" aria-hidden="true"></i>
        </button>
      )}
      {!is_mic_show && (
        <p className="clear_title">ESC to clear</p>
      )}


    </React.Fragment>
  )
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(options)(Dictaphone)

//@flow

import * as React from 'react'
// import FilterBtns from '../../common/FilterButton'

//define props

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
type Props = {
  labelClassName: string,
  children: React.Node,
  label: string,
  onFilterButtonClick: (item: string) => any,
  activeFilter: string,
  filterButtonList: Array<string>,
  techClass: string,
  techContentClass: string,
  tagRowClass?: string,
  isSuggestProductVisible?: boolean,
  // deviceByName?: Object
  placeholder: string,
  defaultValue: string,
  is_mic_show: boolean,
  onValueChange: () => any,
  handleKeyClick: () => any
}
type State = {
  stopListening: boolean,
  startListening: boolean,
}
const InputSearchBar = (props: Props, state: State) => {
  const {
    labelClassName,
    children,
    onFilterButtonClick,
    activeFilter,
    filterButtonList,
    label,
    techClass,
    techContentClass,
    tagRowClass,
    isSuggestProductVisible,
    placeholder,
    defaultValue,
    is_mic_show,
    onValueChange,
    handleKeyClick,
    // deviceByName
  } = props
  const { stopListening, startListening } = state
  const toggleListening = () => {
    isListening ? stopListening() : startListening()
    isListening = !isListening
  }
  return (
    <div className={techClass}>
      <div className={techContentClass}>
        <React.Fragment>
          <input
            type="text"
            placeholder={placeholder}
            // defaultValue={transcript}
            onClick={handleKeyClick}
            onChange={onValueChange}
          />
          <div className="m_voice_search">
            <button className="m_mic" type="button" onClick={toggleListening}>
              <img src={ICON_VOICE} />
            </button>
            <p>or search by voice</p>
          </div>

        </React.Fragment>
      </div>
    </div>
  )
}
InputSearchBar.propTypes = propTypes
export default SpeechRecognition(options)(InputSearchBar)


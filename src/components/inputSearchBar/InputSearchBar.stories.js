import React from 'react'
import {
  storiesOf
} from '@storybook/react'
import {
  action
} from '@storybook/addon-actions'
import {
  withInfo
} from '@storybook/addon-info'
import InputSearchBar from './index.jsx'
import {
  filterButtonList
} from 'utils/metaData'
import '../../containers/home/styles.scss'

storiesOf('Search', module).add(
  'Input Search Bar',
  withInfo('description')(() => {
    return ( <
      InputSearchBar labelClassName = "blu-ipn"
      placeholder = "iPhone X"
      label = "I want to find"
      activeFilter = "Iphone X"
      filterButtonList = {
        filterButtonList
      }
      onFilterButtonClick = {
        action('click')
      }
      techClass = "tech-ipt"
      techContentClass = "tech-cont"
      isSuggestProductVisible = {
        true
      }
      tagRowClass = "pos-relative"
      onTextChange = {
        action('Input Changed')
      }
      />
    )
  })
)
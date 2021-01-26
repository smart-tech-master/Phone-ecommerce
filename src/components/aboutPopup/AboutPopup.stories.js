import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import AboutPopup from './index.jsx'
import './styles.scss'

storiesOf('Pop up', module).add(
  'Pop up',
  withInfo('description')(() => {
    return (
      <AboutPopup
        onAboutPopupClose={action('close popup')}
        isAboutPopup={true}
      />
    )
  })
)

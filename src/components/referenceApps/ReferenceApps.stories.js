import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import ReferenceApps from './index.jsx'
import '../referenceApps/styles.scss'

storiesOf('Reference App container', module).add(
  'container',
  withInfo('description')(() => {
    return (
      <ReferenceApps
        onReferenceAppClick={action('Reference App button clicked')}
      />
    )
  })
)

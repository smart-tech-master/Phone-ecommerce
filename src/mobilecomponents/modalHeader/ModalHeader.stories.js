import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import ModalHeader from './index.jsx'
import '../../containers/home/styles.scss'

storiesOf('Modal', module).add(
  'Modal Header',
  withInfo('description')(() => {
    return (
      <ModalHeader
        onArrowClick={action('Arrow clicked')}
        isArrowClicked={false}
      />
    )
  })
)

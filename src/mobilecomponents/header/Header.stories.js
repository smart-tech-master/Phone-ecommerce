import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter } from 'react-router-dom'
import { withInfo } from '@storybook/addon-info'
import Header from './index.jsx'
import './styles.scss'

storiesOf('Header Component', module).add(
  'Header',
  withInfo('description')(() => {
    return (
      <BrowserRouter>
        <Header
          onFeedBackClick={action('Feedback Clicked')}
          headerClass="header-wrapper"
        />
      </BrowserRouter>
    )
  })
)

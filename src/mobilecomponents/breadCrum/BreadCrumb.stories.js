import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import BreadCrumb from './index.jsx'
import { breadCrumbData } from 'utils/metaData'
import './styles.scss'

storiesOf('Bread Crumb', module).add(
  'Bread Crumb',
  withInfo('description')(() => {
    return (
      <BrowserRouter>
        <BreadCrumb
          breadCrumbData={breadCrumbData}
          onClick={action('Bread crumb clicked')}
        />
      </BrowserRouter>
    )
  })
)

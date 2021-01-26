import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import VersusSidebar from './index.jsx'
import './styles.scss'

storiesOf('Versus', module).add(
  'Versus Side Bar',
  withInfo('description')(() => {
    return <VersusSidebar />
  })
)

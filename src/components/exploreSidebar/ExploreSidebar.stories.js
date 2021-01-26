import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import ExploreSidebar from './index.jsx'
import './styles.module.scss'

storiesOf('Explore', module).add(
  'Explore Side Bar',
  withInfo('description')(() => {
    return <ExploreSidebar />
  })
)

import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { withInfo } from '@storybook/addon-info'
import ModalSideBar from './index.jsx'
import { sideBarMenu, socialApp } from 'utils/metaData'
import './styles.scss'

storiesOf('Modal', module).add(
  'Modal Side Bar',
  withInfo('description')(() => {
    return (
      <BrowserRouter>
        <ModalSideBar sideBarMenu={sideBarMenu} socialApp={socialApp} />
      </BrowserRouter>
    )
  })
)

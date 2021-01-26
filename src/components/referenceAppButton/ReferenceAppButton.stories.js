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
import ReferenceAppButton from './index.jsx'
import {
  referenceAppsData
} from '../../utils/metaData'
import '../referenceApps/styles.scss'

storiesOf('Reference Buttons', module)
  .add(
    'Versus',
    withInfo('description')(() => {
      return ( <
        div className = "tech-app" >
        <
        div className = "app-box" >
        <
        ReferenceAppButton data = {
          referenceAppsData[0]
        }
        index = {
          0
        }
        onReferenceAppClick = {
          action('Reference button Clicked')
        }
        /> <
        /div> <
        /div>
      )
    })
  )
  .add(
    'CES',
    withInfo('description')(() => {
      return ( <
        div className = "tech-app" >
        <
        div className = "app-box" >
        <
        ReferenceAppButton data = {
          referenceAppsData[1]
        }
        index = {
          1
        }
        onReferenceAppClick = {
          action('Reference button Clicked')
        }
        /> <
        /div> <
        /div>
      )
    })
  )
  .add(
    'Explore',
    withInfo('description')(() => {
      return ( <
        div className = "tech-app" >
        <
        div className = "app-box" >
        <
        ReferenceAppButton data = {
          referenceAppsData[2]
        }
        index = {
          2
        }
        onReferenceAppClick = {
          action('Reference button Clicked')
        }
        /> <
        /div> <
        /div>
      )
    })
  )
  .add(
    'Kick Starter',
    withInfo('description')(() => {
      return ( <
        div className = "tech-app" >
        <
        div className = "app-box" >
        <
        ReferenceAppButton data = {
          referenceAppsData[3]
        }
        index = {
          3
        }
        onReferenceAppClick = {
          action('Reference button Clicked')
        }
        /> <
        /div> <
        /div>
      )
    })
  )
  .add(
    'Indiegogo',
    withInfo('description')(() => {
      return ( <
        div className = "tech-app" >
        <
        div className = "app-box" >
        <
        ReferenceAppButton data = {
          referenceAppsData[4]
        }
        index = {
          4
        }
        onReferenceAppClick = {
          action('Reference button Clicked')
        }
        /> <
        /div> <
        /div>
      )
    })
  )
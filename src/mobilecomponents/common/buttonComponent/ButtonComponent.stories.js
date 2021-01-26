import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import ButtonComponent from './ButtonComponent.jsx'
import '../styles.scss'

storiesOf('Buttons', module)
  .add(
    'Default',
    withInfo('description')(() => {
      return (
        <ButtonComponent
          className="btn btn-default"
          value="Default"
          onClick={action('Default button Click')}
        >
          Default
        </ButtonComponent>
      )
    })
  )

  .add(
    'Primary',
    withInfo('description')(() => {
      return (
        <ButtonComponent
          className="btn btn-primary"
          value="Default"
          onClick={action('Default button Click')}
        >
          Primary
        </ButtonComponent>
      )
    })
  )
